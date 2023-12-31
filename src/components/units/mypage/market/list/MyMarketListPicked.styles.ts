import styled from "@emotion/styled";

export const ListWrapper = styled.div``;
export const ListHeader = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 0.5fr 5fr 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const ListHeaderTextIndex = styled.h4``;
export const ListHeaderTextTitle = styled.h4``;
export const ListHeaderTextStatus = styled.h4``;
export const ListHeaderTextSeller = styled.h4``;
export const ListHeaderTextPrice = styled.h4``;
export const ListHeaderTextDate = styled.h4``;
export const ListBody = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`;
export const ListBodyLine = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 0.5fr 5fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
`;
export const ListBodyTextIndex = styled.div``;
export const ListBodyTextTitle = styled.div`
  cursor: pointer;
`;
export const ListBodyTextStatus = styled.div`
  color: #ffd600;
`;
export const ListBodyTextPrice = styled.div``;
export const ListBodyTextSeller = styled.div``;
export const ListBodyTextDate = styled.div``;
