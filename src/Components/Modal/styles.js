import styled from "styled-components";

export const ModalBackground = styled.div`
  background: rgba(50, 50, 50, 0.85);
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  background: white;
  width: 800px;
  height: 600px;
  display: flex;
  margin: 80px auto;
  border-radius: 10px;

  input {
    height: 20px;
    padding: 20px;
  }
`;

export const ModalImage = styled.div`
  background: black;
  height: 100%;
  width: 250px;
  border-radius: 10px 0 0 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  outline: none;
  cursor: pointer;
`;
