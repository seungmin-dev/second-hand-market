import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  gap: 20px;
`;
export const Logo = styled.img`
  width: 130px;
  height: auto;
  cursor: pointer;
`;
export const SessionWrapper = styled.div``;
export const BtnWrapper = styled.div``;
export const LoginButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 40px;
  padding: 0 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;
export const UserInfoWrapper = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const UserPic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  object-fit: cover;
`;
export const UserName = styled.span`
  width: 100px;
  height: 100%;
  line-height: 48px;
`;
