import { useRouter } from "next/router";
import { useQueryFetchBoard } from "../../../../commons/hooks/queries/useQueryFetchBoard";
import * as S from "./BoardDetail.styles";
import { BoardDetailHeader } from "./header/BoardDetailHeader.index";
import { BoardDetailFooter } from "./footer/BoardDetailFooter.index";
import { BoardDetailBody } from "./body/BoardDetailBody.index";
import { Comments } from "../../../commons/comments/write";
import { ListComments } from "../../../commons/comments/list";

export const BoardDetail = (): JSX.Element => {
  const router = useRouter();
  const { data } = useQueryFetchBoard({
    boardId: String(router.query.boardId),
  });

  return (
    <S.Container>
      <BoardDetailHeader data={data} />
      <BoardDetailBody data={data} />
      <BoardDetailFooter />
      <Comments kind="board" />
      <ListComments />
    </S.Container>
  );
};
