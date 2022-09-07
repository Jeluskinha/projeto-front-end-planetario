import styled from "styled-components";

const DropConfig = styled.div`
  display: none;
  position: fixed;
  background-color: green;
  width: 90%;
  min-width: 288px;
  max-width: 310px;
  height: 30%;
  min-height: 180px;
  max-height: 212px;
  border-radius: 8px;
  border-radius: 5%;
  z-index: 200;
  color: black;
  h2{
    color: black;
    height: 33%;
    width: 100%;
    padding: 0 10%;
    text-align: center;
    border: 1px solid var(--Color-white);
  }
`;

export default DropConfig;
