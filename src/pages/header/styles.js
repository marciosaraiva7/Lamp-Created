import styled, { keyframes } from "styled-components";
import dark from "../../themes/dark";

export const logoSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 18%;
  background-color: ${dark.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px 0 0;
`;

export const Label = styled.p`
  width: 304px;
  text-align: left;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  color: #ffffff;
  opacity: 1;
`;

export const MenuOption = styled.p`
  text-align: left;
  font: 23px/34px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #ffffff;
  opacity: 1;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 65px 0 50px;
`;
