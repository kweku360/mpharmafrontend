import React, { useState } from "react";
import LayoutMaster from "../layout/master";
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
//   const { register, errors, handleSubmit } = useForm({
//     validateCriteriaMode: "all",
//   });

  const [loader, setLoader] = useState(false);

  const onSubmit = (data) => {
      //console.log(data);
      // perform Save operation
     // setLoader(true);
  };

  const savePricingModel = async (data) => {
    // const result = await savePricing(data);
    // setLoader(false);
    // if (result.status == "true") {
    //   toaster.success("Product Saved Successfully");
    //   return;
    // } else {
    //   toaster.danger("Unable to Save Product ." + result.message);
    // }
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
      {loader ? (
        <Pane>
          <Spinner marginX="auto" marginY={120} />
          <Text size={500}>Saving Data ...</Text>
        </Pane>
      ) : (
        <Pane width="50%">
          <form onSubmit={onSubmit()}>
            <TextInputField
              label="Product"
              // description="This is a description."
              placeholder="Enter Product Name"
              name="product"
            />
            <TextInputField
              label="Price"
              placeholder="Enter Price"
              name="price"
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
              >
                Save
              </Button>
            </Pane>
          </form>
        </Pane>
      )}
    </Pane>
  );
};
const Edit = LayoutMaster(EditProduct, { title: "Edit Product " });
export default Edit;
