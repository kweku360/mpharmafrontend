import React from "react";
import { useSelector } from "react-redux";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";
import { Pane,Button } from "evergreen-ui";
import ProductTable from "../tables/table";

import {useHistory} from "react-router-dom"

import LayoutMaster from "../layout/master";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const List = () => {
  const state = useSelector((state)=>state);
  
  const history = useHistory()
  const cols = [
    { id: 2, name: "Product Name" },
    { id: 3, name: "Current Price" },
    { id: 4, name: "" },
    { id: 5, name: "" },
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
        <Button
                float="left"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                marginLeft={40}
                appearance="primary"
                width={145}
                onClick={() => { history.push("/add")}}
              >
                Add New Product 
              </Button>
      <ProductTable cols={[cols]} data={state.product} />
    </Pane>
  );
};


const ListProducts = LayoutMaster(List, { title: "All Products" });
export default ListProducts;