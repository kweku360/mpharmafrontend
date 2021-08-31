import React from "react";
import { Heading } from "evergreen-ui";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";

const leftBox = css`
  width: 15%;
  height: 100vh;
  float: left;
  /* background-color: #2c3338; */
  background-color: #000;
`;

const Sidemenu = () => {
  return (
    <div css={leftBox}>
      <div>
        <Heading
          css={css`
            color: #fff;
            padding: 30px 30px 5px 30px;
          `}
          size={500}
        >
          Mpharma
        </Heading>
        <hr
          css={css`
            margin-left: 20px;
            height: 0.1px;
            margin-right: 30px;
            h2 {
              color: #000 !important;
            }
          `}
        ></hr>
      </div>
      <br />
      <br />
      <div
        css={css`
          margin-left: 30px;
          h2 {
            color: #fff;
          }
        `}
      >
      </div>
    </div>
  );
};

export default Sidemenu;
