import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import OptionDto from "../dto/OptionDto";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import { OrderContext } from "../context/OrderContext";

const ProductOption: React.FC = () => {
  const [options, setOptions] = useState<OptionDto[]>();
  const { totals, handleUpdateOptions } = useContext(OrderContext);

  const fetchOptions = async () => {
    try {
      const { data } = await axios.get<OptionDto[]>("/options");
      setOptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const _ = fetchOptions();
  }, []);

  return (
    <Product>
      <p>총 가격: ￦{totals.options.toLocaleString()}</p>
      <Wrapper>
        {options ? (
          options.map((option) => (
            <Item {...option} handler={handleUpdateOptions} />
          ))
        ) : (
          <Loading />
        )}
      </Wrapper>
    </Product>
  );
};

export default ProductOption;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ItemProps extends OptionDto {
  handler: (name: string, count: number) => void;
}

const Item: React.FC<ItemProps> = ({ name, description, handler }) => {
  const { orderCounts } = useContext(OrderContext);

  return (
    <ItemWrapper key={name}>
      <input
        type="checkbox"
        id={`option-${name}`}
        checked={orderCounts.options[name] === 1}
        onChange={(event) => handler(name, event.target.checked ? 1 : 0)}
      />
      <label htmlFor={`option-${name}`}>{name}</label>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  label {
    margin-left: 5px;
  }
`;
