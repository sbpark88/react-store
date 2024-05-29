import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Summary: React.FC = () => {
  return (
    <Wrapper>
      <h1>주문 확인</h1>
      <h2>여행 상품</h2>
      <ul></ul>
      <Form />
    </Wrapper>
  );
};

export default Summary;

const Wrapper = styled.div``;

interface FormProps {}

const Form: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const checkOrder = useCallback((event: React.FormEvent<unknown>) => {
    event.preventDefault();
  }, []);

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
