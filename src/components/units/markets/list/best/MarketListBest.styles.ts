import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  height: 300px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    4px 12px 36px rgba(0, 0, 0, 0.09);
`;
export const Card = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  overflow: hidden;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
export const Info = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: "name name name" 1.3fr "remarks remarks remarks" 1fr "price heart count" 1fr / 1fr 0.1fr 0.2fr;
  padding: 40px 40px 40px 30px;
  align-items: center;
`;
export const Name = styled.p`
  grid-area: name;
  font-size: 24px;
  word-wrap: break-word;
`;
export const Remarks = styled.p`
  grid-area: remarks;
  color: #4f4f4f;
  font-size: 18px;
`;
export const Price = styled.h3`
  grid-area: price;
  font-size: 24px;
`;
export const Heart = styled(HeartFilled)`
  grid-area: heart;
  color: #ffd600;
  font-size: 1.5rem;
  text-align: right;
`;
export const Count = styled.p`
  grid-area: count;
  text-align: center;
  font-size: 18px;
`;
export const Button = styled.div`
  width: 120px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
  transition: transform 0.2s ease 0s;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
  }
`;
export const NewWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 30px;
  padding: 50px 0 0 30px;
  overflow: hidden;
  background: linear-gradient(
    220deg,
    rgba(255, 237, 176, 1) 0%,
    rgba(255, 163, 116, 1) 100%
  );
  cursor: pointer;
  transition: transform 0.2s ease 0s;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    4px 12px 36px rgba(0, 0, 0, 0.09);
  img {
    width: 150px;
    position: absolute;
    right: -20px;
    bottom: -5px;
    transition: transform 0.2s ease 0s;
  }
  :hover {
    transform: translateY(-5px);
    img {
      transform: scale(120%);
    }
  }
`;
export const ButtonTitle = styled.h2`
  margin-bottom: 20px;
`;
export const ButtonText = styled.p``;
