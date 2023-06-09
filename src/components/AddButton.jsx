import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/actions";

const AddIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  margin-right: 50px;

  &:hover {
    animation: animacao 0.5s ease both;
    @keyframes animacao {
      from {
        width: 20px;
        height: 20px;
      }
      to {
        width: 23px;
        height: 23px;
        transform: translateY(-5px);
      }
    }
  }
`;

const Adcionar = () => {
  return (
    <>
      <AddIcon src="./img/add.png" />
    </>
  );
};

export default Adcionar;
