import * as S from "./MarketListBody.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { replaceNumberComma } from "../../../../commons/libraries/utils";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IMarketListProps {
  data: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  search: string;
}

export const MarketListBodyList = (props: IMarketListProps): JSX.Element => {
  return (
    <S.List>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditems?.map((el) => (
          <S.Row key={uuidv4()}>
            <S.ItemImg
              src={
                el.images.length > 1
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/images/photo-placeholder.png"
              }
            />
            <S.Name>
              {el.name
                .replaceAll(props.search, `!@#$${props.search}!@#$`)
                .split("!@#$")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{
                      color: props.search === el ? "#ffd600" : "black",
                    }}
                  >
                    {el}
                  </span>
                ))}
            </S.Name>
            <S.Remarks>{el.remarks}</S.Remarks>
            <S.Tags>{el.tags}</S.Tags>
            <S.Price>
              <S.EuroMark />
              {replaceNumberComma(el.price)}
            </S.Price>
            <S.Seller>
              <S.SellerPic
                src={
                  el.seller.picture
                    ? `https://storage.googleapis.com/${el.seller.picture}`
                    : "/images/icons/profile.png"
                }
              />
              {el.seller.name}
            </S.Seller>
            <S.Count>
              <S.Heart />
              {el.pickedCount}
            </S.Count>
          </S.Row>
        ))}
      </InfiniteScroll>
    </S.List>
  );
};
