import React, { useState } from "react";
import LayoutMaster from "../layout/master";
import { bindActionCreators } from "redux";
// import { savePricing } from "../../../data/pricing";
import {
  TextInputField,
  Pane,
  Button,
} from "evergreen-ui";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../../state";
import {useHistory} from "react-router-dom"


const centerForm = css`
  margin-left: 80px;
  width: 40%;
  padding: 10px;
`;

const AddProduct = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const {add} = bindActionCreators(ActionCreators,dispatch);

  const history = useHistory()

  const onSubmit = () => {
      add(name,price);
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextInputField
              label="Price"
              placeholder="Enter Price"
              type="number" 
              min="0" 
              step="1"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <Pane marginTop="30">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/")
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
const Add = LayoutMaster(AddProduct, { title: "Add Product " });
export default Add;
