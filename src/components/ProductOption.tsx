import React, { useEffect, useState } from "react";
import Product from "./Product";
import OptionDto from "../dto/OptionDto";
import axios from "axios";
import styled from "styled-components";

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
    fetchOptions().catch((error) => console.error(error));
  }, []);

  return (
    <Product>
      <Wrapper>
        {options?.map((option) => <div key={option.name}>option</div>)}
      </Wrapper>
    </Product>
  );
};

export default ProductOption;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
