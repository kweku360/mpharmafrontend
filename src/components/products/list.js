import React,{useState,useEffect} from "react";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";
import { Pane } from "evergreen-ui";
import { mockData } from "../../data/data"

import LayoutMaster from "../layout/master";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const List = () => {
  const [data, setData] = useState([]);
  const cols = [
    { id: 2, name: "Product Name" },
    { id: 3, name: "Current Price" },
    { id: 4, name: "" },
    { id: 5, name: "" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
     const res = await mockData();
    // console.log("pricing");
    // setData(res);
  };
  return (
    <Pane
      css={centerForm}
      elevation={1}
      float="left"
      margin={24}
      display="flex"
      flexDirection="column"
    >
      {/* <PricingTable cols={[cols]} data={data} /> */}
    </Pane>
  );
};


const ListProducts = LayoutMaster(List, { title: "All Products" });
export default ListProducts;