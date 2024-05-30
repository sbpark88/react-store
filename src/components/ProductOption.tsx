import React, { useEffect, useState } from "react";
import Product from "./Product";
import OptionDto from "../dto/OptionDto";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";

const ProductOption: React.FC = () => {
  const [options, setOptions] = useState<OptionDto[]>();

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
      <Wrapper>{options ? options.map(Item) : <Loading />}</Wrapper>
    </Product>
  );
};

export default ProductOption;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item: React.FC<OptionDto> = ({ name, description }) => {
  return (
    <ItemWrapper key={name}>
      <input type="checkbox" id={`option-${name}`} />
      <label htmlFor={`option-${name}`}>{name}</label>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  label {
    margin-left: 5px;
  }
`;
