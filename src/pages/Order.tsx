import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import ProductMain from "../components/ProductMain";
import ProductOption from "../components/ProductOption";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const { totals } = useContext(OrderContext);
  const navigate = useNavigate();

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
          <h2>Total Price: ￦{totals.total.toLocaleString()}</h2>
          <button onClick={() => navigate("/summary")}>주문</button>
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
