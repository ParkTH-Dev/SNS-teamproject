import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
`;

const Inner = styled.div`
  width: 1000px;
  height: 302px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-30);
  display: flex;
  align-items: center;
  padding: 27px 30px;
  gap: 8px;
`;

const StoryItem = styled.div`
  width: 150px;
  height: 252px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background: var(--color-light-gray-01);
  position: relative;

  .myStory {
    border-radius: 8px 8px 0 0;
    position: relative;

    .humanIcon {
      width: 100%;
      height: 158px;
      font-size: 167px;
      color: var(--color-gray-01);
      position: absolute;
      top: 0;
      right: 7px;
    }

    .storyMake {
      .plusIcon {
        border-radius: 50%;
        background: var(--color-facebookblue);
        width: 44px;
        height: 44px;
        border: 4px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: #fff;
        position: absolute;
        top: 135px;
        left: 55px;
        z-index: 1;
        cursor: pointer;
      }
    }

    .textItem {
      width: 100%;
      height: 94px;
      display: flex;
      position: absolute;
      top: 157px;
      border-radius: 0 0 8px 8px;
      background: #fff;
    }

    .text {
      position: absolute;
      top: 225px;
      left: 35px;
    }
  }
`;

const StoryFriend = styled.div`
  width: 150px;
  height: 252px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  .storyInfo {
    position: relative;

    img {
      width: 100%;
      height: 252px;
      border-radius: 8px;
      object-fit: cover;
      opacity: 0.8;
    }

    .story {
      width: 44px;
      height: 44px;
      position: absolute;
      top: 8px;
      left: 8px;
      border-radius: 50%;
      border: 3px solid var(--color-facebookblue);
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;

      .storyProfile {
        width: 100%;
        height: 100%;
        background: var(--color-gray-01);
        border-radius: 50%;
      }
    }

    .storyName {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 36px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding-left: 10px;
      line-height: 36px;
      font-size: 14px;
      border-radius: 0 0 8px 8px;
    }
  }
`;

const MainStory = () => {
  return (
    <Wrapper>
      <Inner>
        <StoryItem>
          <div className="myStory">
            <div className="humanIcon">
              <IoPersonSharp />
            </div>
            <div className="storyMake">
              <div className="plusIcon">
                <FaPlus />
              </div>
            </div>
            <div className="textItem"></div>
            <div className="text">스토리 만들기</div>
          </div>
        </StoryItem>
        {[...Array(5)].map((_, index) => (
          <StoryFriend key={index}>
            <div className="storyInfo">
              <img src="../public/img/test.jpg" alt="testimg" />
              <div className="story">
                <div className="storyProfile"></div>
              </div>
              <div className="storyName">김정하</div>
            </div>
          </StoryFriend>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default MainStory;
