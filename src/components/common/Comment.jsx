import React, { useState, useEffect, useContext } from "react";
import CommentUpload from "./CommentUpload";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./Comment.css";
import { DataStateContext } from "../../App";
import { styled } from "styled-components";

// 개별 댓글 컴포넌트
const Comment = ({ comment, onDelete }) => {
  const { currentUserData } = useContext(DataStateContext);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikeStatus = localStorage.getItem(`liked-comment-${comment.id}`);
    const savedLikesCount = localStorage.getItem(`likes-comment-${comment.id}`);

    if (savedLikeStatus === "true") {
      setLiked(true);
    }
    if (savedLikesCount) {
      setLikes(parseInt(savedLikesCount, 10));
    }
  }, [comment.id]);

  const handleToggleLike = () => {
    setLiked((prev) => {
      const newLikedStatus = !prev;
      localStorage.setItem(`liked-comment-${comment.id}`, newLikedStatus);

      const newLikesCount = newLikedStatus ? likes + 1 : likes - 1;
      setLikes(newLikesCount);

      localStorage.setItem(`likes-comment-${comment.id}`, newLikesCount);

      return newLikedStatus;
    });
  };

  return (
    <div className="comment">
      <img
        className="profileImg"
        src={currentUserData?.profileImage || "/img/defaultProfile.jpg"}
        alt="Profile"
      />
      <div className="commentContentWrapper">
        <div className="comment-content">
          <h4>{comment.formattedUserName}</h4>
          <p>{comment.content}</p>
        </div>
        <div className="actions">
          <button className={liked ? "liked" : ""} onClick={handleToggleLike}>
            {liked ? "좋아요 취소" : "좋아요"} {likes}
          </button>
          <button className="deleteBtn" onClick={onDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 0;
  border-top: 1px solid #ccc;
  @media (max-width: 768px) {
    padding: 30px 0 10px;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 500px;
  overflow-y: auto;
  .profileImg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-bottom: 28px;
    margin-right: 14px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

const CommentSection = ({ post }) => {
  const { currentUserData } = useContext(DataStateContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!post?.id) return;

    const commentsRef = collection(db, "posts", post.id, "comments");

    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, [post?.id]);

  const handleCreateComment = async (postId, content) => {
    if (!content.trim()) return;
    const formattedUserName = currentUserData?.userName
      ? `${currentUserData.userName.firstName} ${currentUserData.userName.lastName}`
      : "Anonymous";
    const newComment = {
      content,
      formattedUserName,
      userId: currentUserData?.userId || "guest",
      createdAt: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, `posts/${postId}/comments`), newComment);
    } catch (error) {
      console.error("댓글 생성 중 오류 발생:", error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", post.id, "comments", id));
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생:", error);
    }
  };

  return (
    <Wrapper>
      <CommentList>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={() => handleDeleteComment(comment.id)}
          />
        ))}
      </CommentList>
      <CommentUpload
        postId={post.id}
        onCreateComment={(content) => handleCreateComment(post.id, content)}
      />
    </Wrapper>
  );
};

export default CommentSection;
