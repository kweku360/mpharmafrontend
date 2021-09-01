import React,{useState} from "react";
import { useSelector } from "react-redux";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";
import { Pane } from "evergreen-ui";
import PriceTable from "../tables/pricetable";

import {useParams} from "react-router-dom"

import LayoutMaster from "../layout/master";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const PriceHistory = () => {
  const state = useSelector((state)=>state);
  let { id } = useParams();
  const [name, setName] = useState(state.product.products[id].name);

  const cols = [
    { id: 2, name: "Price" },
    { id: 3, name: "Date" },
  ];
  return (
    <Pane
      css={centerForm}
      elevation={1}
      float="left"
      margin={24}
      display="flex"
      flexDirection="column"
    >
        <h3>{name}</h3>
      <PriceTable cols={[cols]} id={id} data={state.product} />
    </Pane>
  );
};


const ListHistory = LayoutMaster(PriceHistory, { title: "Price History" });
export default ListHistory;