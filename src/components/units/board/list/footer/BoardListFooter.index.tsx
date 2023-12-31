import { FooterWrapper } from "./BoardListFooter.styles";
interface IBoardListFooterProps {
  children: JSX.Element;
}
export const BoardListFooter = (props: IBoardListFooterProps): JSX.Element => {
  return <FooterWrapper>{props.children}</FooterWrapper>;
};
