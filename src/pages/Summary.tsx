import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { OrderContext, OrderCounts } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const Summary: React.FC = () => {
  const { orderCounts, totals } = useContext(OrderContext);

  return (
    <Wrapper>
      <h1>주문 확인</h1>
      <h2>여행 상품: ￦{totals.products}</h2>
      <SummaryProducts {...orderCounts} />
      <SummaryOptions {...orderCounts} />
      <h2>합계: ￦{totals.total}</h2>
      <Form />
    </Wrapper>
  );
};

export default Summary;

const Wrapper = styled.div``;

const SummaryProducts: React.FC<OrderCounts> = ({ products }) => {
  const productsEntries = Object.entries(products);

  return (
    <>
      {productsEntries.length && (
        <ul>
          {productsEntries.map(([country, days]) => (
            <li key={country}>
              {country} {days} days
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const SummaryOptions: React.FC<OrderCounts> = ({ options }) => {
  const { totals } = useContext(OrderContext);

  const checkedOptions = Object.entries(options).filter(
    ([_, checked]) => checked === 1,
  );

  return (
    <>
      {checkedOptions.length && (
        <>
          <h2>옵션: ￦{totals.options}</h2>
          <ul>
            {checkedOptions.map(([option]) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

interface FormProps {}

const Form: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const checkOrder = (event: React.FormEvent<unknown>) => {
    event.preventDefault();
    navigate("/complete");
  };

  return (
    <FormWrapper onSubmit={checkOrder}>
      <input
        type="checkbox"
        checked={checked}
        id="confirm-checkbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
      <br />
      <button type="submit" disabled={!checked}>
        주문 확인
      </button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form``;
