import React, { useState } from "react";

import {
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { alerts } from "./alertsdescription";

const CustomizedAlert = ({ type }) => {
  const selectedAlert = alerts[type];

  if (type)
    return (
      <Container>
        <Alert status={selectedAlert.status}>
          <AlertIcon />
          <AlertTitle mr={2}>{selectedAlert.title}</AlertTitle>
          <AlertDescription>{selectedAlert.description}</AlertDescription>
          {/* <CloseButton
          onClick={() => setAlertVisibility(false)}
          position="absolute"
          right="8px"
          top="8px"
        /> */}
        </Alert>
      </Container>
    );
  return <div></div>;
};

export default CustomizedAlert;
