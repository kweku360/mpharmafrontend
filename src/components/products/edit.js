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
import { useDispatch,useSelector } from "react-redux";
import { ActionCreators } from "../../state";
import {useHistory,useParams} from "react-router-dom"


const centerForm = css`
  margin-left: 80px;
  width: 40%;
  padding: 10px;
`;


const EditProduct = () => {

  
  const dispatch = useDispatch();
  const {edit} = bindActionCreators(ActionCreators,dispatch);

  const history = useHistory()
  let { id } = useParams();
  const state = useSelector((state)=>state);
  const [name, setName] = useState(state.product.products[id].name);
  const [price, setPrice] = useState(1);




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
              value={price}
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
const Edit = LayoutMaster(EditProduct, { title: "Edit Product " });
export default Edit;
