import { Skeleton } from "@mui/material";
import * as S from "../BoardDetail.styles";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IBoardDetailHeaderProps {
  data: Pick<IQuery, "fetchBoard">;
}
export const BoardDetailHeader = (
  props: IBoardDetailHeaderProps,
): JSX.Element => {
  return (
    <S.HeaderWrapper>
      {!props.data ? (
        <SkeletonAvatar />
      ) : (
        <S.ProfileImg
          src={`https://storage.googleapis.com/${props.data?.fetchBoard?.user?.picture}`}
          onError={(event) =>
            (event.currentTarget.src = "/images/icons/profile.png")
          }
        />
      )}
      <S.WriterInfoWrapper>
        <S.Writer>
          {!props.data ? <Skeleton /> : props.data?.fetchBoard?.writer}
        </S.Writer>
        <S.CreatedAt>
          Date :{" "}
          {!props.data ? (
            <Skeleton />
          ) : (
            getDate(props.data?.fetchBoard?.createdAt)
          )}
        </S.CreatedAt>
      </S.WriterInfoWrapper>
      <S.IconWrapper>
        <S.LinkIcon />
        <Tooltip
          placement="topRight"
          title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
        >
          <S.LocationIcon />
        </Tooltip>
      </S.IconWrapper>
    </S.HeaderWrapper>
  );
};