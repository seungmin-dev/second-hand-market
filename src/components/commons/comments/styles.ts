import { EnterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
export const Form = styled.form`
  grid-area: form;
`;
export const Rating = styled(Rate)``;
export const Input = styled.input`
  border: none;
  border: 1px solid #bdbdbd;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
`;
export const Row = styled.div`
  display: grid;
  grid-template: ${({ onEdit }: IRowProps) =>
    !onEdit
      ? "'pic date date icons' 0.5fr 'pic contents contents contents' 2fr 'name contents contents contents' 1fr / 1fr 6fr 0.5fr 0.6fr"
      : "'pic form form form' 1fr 'pic form form form' 1fr 'name form form form' 1fr / 1fr 6fr 0.5fr 0.6fr"};

  padding: 20px 0 10px;
  border-top: 1px solid #bdbdbd;
  :first-of-type {
    border-top: none;
  }
`;
interface IRowProps {
  onEdit: boolean;
}
export const CommentPic = styled.img`
  grid-area: pic;
  margin: 0 auto 10px;
  padding: 15px;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  object-fit: cover;
`;
export const CommentDate = styled.span`
  grid-area: date;
  text-align: right;
  font-size: 14px;
  color: #bdbdbd;
`;
export const CommentContents = styled.span`
  grid-area: contents;
  word-wrap: break-word;
`;
export const CommentName = styled.span`
  grid-area: name;
  text-align: center;
  font-size: 14px;
`;
export const CommentIcons = styled.div`
  grid-area: icons;
  text-align: right;
`;
export const Icon = styled.button`
  width: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 15px;
  }
`;
export const ReplyIcon = styled(EnterOutlined)`
  /* text-align: left;
  padding-left: 20px; */
  width: 5%;
  margin: 0 auto;
  font-size: 1.5rem;
  transform: scale(-1, 1);
`;
export const ReplyWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;
export const ReplyRow = styled.div`
  width: 100%;
  min-height: 80px;
  display: grid;
  grid-template: ${({ onEdit }: IRowProps) =>
    !onEdit
      ? "'pic date date icons' 0.5fr 'pic contents contents contents' 2fr 'name contents contents contents' 1fr / 1fr 6fr 0.5fr 0.6fr"
      : "'pic form form form' 1fr 'pic form form form' 1fr 'name form form form' 1fr / 1fr 6fr 0.5fr 0.6fr"};
`;

interface IRowProps {
  onEdit: boolean;
}
