import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";
import { Pane,Button } from "evergreen-ui";
import { mockData } from "../../data/data"
import ProductTable from "../tables/table";

import LayoutMaster from "../layout/master";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const List = () => {
  const [data, setData] = useState([]);
  const state = useSelector((state)=>state);
  console.log(state);
  const cols = [
    { id: 2, name: "Product Name" },
    { id: 3, name: "Current Price" },
    { id: 4, name: "" },
    { id: 5, name: "" },
  ];

  useEffect(() => {
    //loadData();
  }, []);

  const loadData = async () => {
     const res = await mockData();
    setData(res);
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
        <Button
                float="left"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                marginLeft={40}
                appearance="primary"
                width={145}
                onClick={async () => {
                    <Redirect to="/add" />
                }}
              >
                Add New Product 
              </Button>
      <ProductTable cols={[cols]} data={data} />
    </Pane>
  );
};


const ListProducts = LayoutMaster(List, { title: "All Products" });
export default ListProducts;