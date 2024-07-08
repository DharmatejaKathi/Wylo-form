import styled from "styled-components";

export const Logo = styled.img`
  width: 56px;
  border-radius: 9px;
`;

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Nav = styled.nav`
  padding: 5px;
  background-color: ${(props) => props.bg_color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WyloFont = styled.h2`
  font-family: "Calibri";
  color: ${(props) => props.heading_color};
  font-weight: 500px;
`;
