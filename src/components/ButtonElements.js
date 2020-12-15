import styled, { css } from "styled-components"

export const Button = styled.button`
  transition: all 0.3s ease-out;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  ${props =>
    props.primary &&
    css`
      background-color: #242424;
      color: #fff;
      border: none;
      &:hover {
        background-color: #fff;
        color: #242424;
        border: none;
      }
    `}
  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      padding: 8px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
      &:hover {
        border: 1px solid #f00946;
      }
    `}
  ${props =>
    props.mobile &&
    css`
      background-color: transparent;
      color: #fff;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #fff;
      width: 100%;
      text-decoration: none;
      font-size: 1.5rem;
      padding: 14px 20px;
      transition: all 0.3s ease-out;
      &:hover {
        border: 1px solid #f00946;
        background-color: #f00946;
      }
    `}
    ${props =>
    props.nav &&
    css`
      padding: 12px 80px;
      font-size: 20px;
      &:hover {
        color: #fff;
        background-color: #f00946;
        transition: all 0.2s ease-out;
      }
    `}
    ${props =>
    props.start &&
    css`
      padding: 12px 80px;
      color: #fff;
      font-size: 20px;
      background-color: ${({ isImgStart }) =>
        isImgStart ? "#242424" : "#26629f"};
      &:hover {
        color: #fff;
        background-color: #f00946;
        transition: all 0.2s ease-out;
        transform: scale(1.03);
      }
    `}
`
