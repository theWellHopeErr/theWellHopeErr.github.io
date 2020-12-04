import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styled, { keyframes } from "styled-components";

const SplashScreen = () => {
  const rotate = keyframes`
    from {transform: rotate(0deg);}

    to {transform: rotate(360deg);}
    `;

  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear;
  `;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Rotate>
        <Avatar
          alt="Suryarajan S"
          src="assets/img/profile.jpg"
          style={{ width: "200px", height: "200px" }}
        />
      </Rotate>
    </div>
  );
};

export default SplashScreen;
