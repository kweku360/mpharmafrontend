import React, { useState,useEffect } from "react";
import LayoutMaster from "../layout/master";
import { bindActionCreators } from "redux";
// import { savePricing } from "../../../data/pricing";
import {
  TextInputField,
  Text,
  Pane,
  Button,
  toaster,
  Spinner,
  Combobox,
} from "evergreen-ui";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useDispatch,useSelector } from "react-redux";
import { ActionCreators } from "../../state";
import {useHistory,useParams} from "react-router-dom"


const centerForm = css`
  margin-left: 80px;
  width: 40%;
  padding: 10px;
`;

const selectCustom = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 4-px;
  padding: 10px 38px 10px 16px;
  background-size: 10px;
  transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const EditProduct = () => {

  
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const {edit} = bindActionCreators(ActionCreators,dispatch);

  const history = useHistory()
  let { id } = useParams();
  const state = useSelector((state)=>state);
  const [name, setName] = useState(state.product.products[id].name);

  useEffect(()=>{
    // setName()
  },[])

  const onSubmit = () => {
      edit(id,name,price);
       history.push("/")
  };

  return (
    <Pane
      css={centerForm}
      elevation={1}
      float="left"
      margin={26}
      display="flex"
      flexDirection="column"
    >
        <Pane width="50%">
          <form>
            <TextInputField
              label="Product"
              placeholder="Enter Product Name"
              name="product"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextInputField
              label="Price"
              placeholder="Enter Price"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <Pane marginTop="30">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                }}
                marginRight={100}
                height={40}
                iconBefore="arrow-left"
              >
                Cancel
              </Button>
              <Button
                float="right"
                height={40}
                appearance="primary"
                iconAfter="arrow-right"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit(e)
                }}
              >
                Save
              </Button>
            </Pane>
          </form>
        </Pane>      
    </Pane>
  );
};
const Edit = LayoutMaster(EditProduct, { title: "Edit Product " });
export default Edit;
