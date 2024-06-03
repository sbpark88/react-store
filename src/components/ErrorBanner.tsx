import React from "react";
import styled from "styled-components";

const ErrorBanner: React.FC = ({}) => {
  return <Wrapper>내용을 표시할 수 없습니다</Wrapper>;
};

export default ErrorBanner;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  padding: 0;
  margin: 0;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
