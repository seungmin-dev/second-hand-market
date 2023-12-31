import { useState } from "react";
import { MyPointSearch } from "./search/MyPointSearch.index";
import { MyPointList } from "./list/MyPointList.index";
import { MyPointBuyingList } from "./list/MyPointBuyingList.index";
import { MyPointLoadingList } from "./list/MyPointLoadingList.index";
import { MyPointSellingList } from "./list/MyPointSellingList.index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 70vh;
  padding-top: 30px;
`;

export const MyPonint = (): JSX.Element => {
  const [selectedOpt, setSelectedOpt] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <MyPointSearch
        selectedOpt={selectedOpt}
        setSelectedOpt={setSelectedOpt}
        setSearch={setSearch}
      />
      {selectedOpt === "all" ? <MyPointList /> : ""}
      {selectedOpt === "loading" ? <MyPointLoadingList /> : ""}
      {selectedOpt === "buying" ? <MyPointBuyingList search={search} /> : ""}
      {selectedOpt === "selling" ? <MyPointSellingList search={search} /> : ""}
    </Wrapper>
  );
};
