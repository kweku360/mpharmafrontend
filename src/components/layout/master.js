import React from "react";
/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";
import Topbar from "./topbar";
import Sidemenu from "./sidemenu";

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: #000;
  color: #606468;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
`;

const centerBox = css`
  display: inline-grid;
  width: 84%;
  height: 100vh;
  float: left;
  background-color: #000;
  /* display: flex; */
`;
function withLayout(WrappedComponent, props = {}) {
  const { title } = props;
  return function LayoutMaster() {
    return (
      <div css={fullscreen}>
        <Sidemenu />
        <div css={centerBox}>
          <div
            css={css`
              margin-top: 20px;
              border-radius: 30px;
              width: 100%;
              height: 95%;
              background-color: #fff;
            `}
          >
            <Topbar title={title} />
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
}

export default withLayout;
