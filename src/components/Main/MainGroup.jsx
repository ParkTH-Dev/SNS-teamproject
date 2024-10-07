/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  MainTitle_18_n,
  MainTitle_22_b,
} from "../../styles/GlobalStyles.styles";
import { IoClose } from "react-icons/io5";
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 20px;
  @media screen and (max-width: 1050px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const Inner = styled.div`
  width: 1000px;
  height: 440px;
  padding: 27px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-30);
  position: relative;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    border-radius: var(--border-radius-08);
    padding: 20px 15px;
    width: 90vw;
    /* height: 100%; */
    min-width: 360px;
    height: 100%;
    /* margin: 0 auto; */
  }
`;

const Title = styled.div`
  h2 {
    ${MainTitle_22_b}
    margin-bottom: 5px;
  }
  span {
    ${MainTitle_18_n}
    color: var(--color-gray-01);
  }
`;

const Items = styled.div`
  .slider {
    width: 100%;
    height: 100%;
  }
  .slick-slide {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .slick-track {
    display: flex;
    justify-content: flex-start;
    transition: transform 0.5s ease-in-out;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 320px;
  background: #999;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    background-color: var(--color-light-gray-01);
    border-radius: 50%;
  }

  div {
    background: var(--color-light-gray-02);
    padding: 10px 20px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 0;

    h3 {
      ${MainTitle_18_n}
    }

    h4 {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 10px;
      padding: 10px;
      background-color: var(--color-light-gray-01);
      text-align: center;
      border-radius: 8px;
    }
  }
  @media screen and (max-width: 1050px) {
  }
  @media screen and (max-width: 768px) {
    height: 250px;

    div {
      height: 110px;
      h3 {
        font-size: 16px;
      }
      h4 {
        font-size: 12px;
      }
      span {
        padding: 7px 5px;
      }
    }
  }
`;
// 슬릭슬라이더 커스텀 화살표
const NextBtn = styled.span`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--color-light-gray-01);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  svg {
    margin-left: 5px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NextArrow = ({ onClick }) => {
  return (
    <NextBtn onClick={onClick}>
      <MdOutlineNavigateNext />
    </NextBtn>
  );
};
// 슬릭슬라이더 커스텀 화살표
const PrevBtn = styled.span`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--color-light-gray-01);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  svg {
    margin-left: 3px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const PrevArrow = ({ onClick }) => {
  return (
    <PrevBtn onClick={onClick}>
      <MdOutlineNavigateBefore />
    </PrevBtn>
  );
};

const MainGroup = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 8000,
    nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // 1024px 이하일 때
        settings: {
          slidesToShow: 3, // 슬라이드를 2개만 보여줌
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550, // 600px 이하일 때
        settings: {
          slidesToShow: 2, // 슬라이드를 1개만 보여줌
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Inner>
        <Title>
          <h2>회원님을 위한 추천 그룹</h2>
          <span>회원님이 관심을 가질만한 그룹입니다.</span>
        </Title>
        <Items>
          <Slider className="slider" {...settings}>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>함께하는 세계여행</h3>
                <h4>멤버 4.4천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>반려동물</h3>
                <h4>멤버 2.4천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>운동</h3>
                <h4>멤버 3.2천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>1</h3>
                <h4>멤버 3.2천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>2</h3>
                <h4>멤버 3.2천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
            <Item>
              {/* <IoClose /> */}
              <div>
                <h3>운동</h3>
                <h4>멤버 3.2천명</h4>
                <span>그룹 가입</span>
              </div>
            </Item>
          </Slider>
        </Items>
      </Inner>
    </Wrapper>
  );
};

export default MainGroup;
