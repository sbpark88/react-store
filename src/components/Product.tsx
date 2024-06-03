import React from "react";
import styled from "styled-components";
import { ChildrenComponent } from "../types";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

interface Props extends ChildrenComponent {}

const Product: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div``;
