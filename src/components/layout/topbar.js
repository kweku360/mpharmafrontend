import React from "react";
import { Pane, Heading, Avatar, Button } from "evergreen-ui";

const Topbar = ({ title }) => {
  return (
    <Pane
      display="flex"
      padding={5}
      borderBottom={"2px solid #f4f4f7"}
      margin={"30px"}
      borderRadius={3}
    >
      <Pane flex={1} alignItems="left" display="flex">
        <Heading size={700}>{title || ""}</Heading>
      </Pane>
      <Pane>
        {/* <NotificationsIcon color="" size={28} marginRight={16} /> */}
        <Avatar isSolid name="MPharma" size={30} />
        <Button marginTop={-20} appearance="minimal" marginLeft={15}>
          Mpharma
        </Button>
      </Pane>
    </Pane>
  );
};

export default Topbar;