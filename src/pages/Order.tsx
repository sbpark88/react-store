import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ProductMain from "../components/ProductMain";
import ProductOption from "../components/ProductOption";

const Order: React.FC = () => {
  const [orderInfo, setOrderInfo] = useState();

  const makeOrder = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {},
    [],
  );

  return (
    <Wrapper>
      <h1>Travel Products</h1>
      <div>
        <ProductMain />
      </div>
      <Flex>
        <FlexItem>
          <ProductOption />
        </FlexItem>
        <FlexItem>
          <h2>Total Price: </h2>
          <button onClick={makeOrder}>주문</button>
        </FlexItem>
      </Flex>
    </Wrapper>
  );
};

export default Order;

const Wrapper = styled.div``;

const Flex = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FlexItem = styled.div`
  width: 50%;
`;
