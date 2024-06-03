import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductDto from "../dto/ProductDto";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";

const ProductMain: React.FC = () => {
  const [products, setProducts] = useState<ProductDto[]>();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get<ProductDto[]>("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const _ = fetchProducts();
  }, []);

  return (
    <Product>
      <Wrapper>{products ? products.map(Item) : <Loading />}</Wrapper>
    </Product>
  );
};

export default ProductMain;

const Wrapper = styled.div`
  display: flex;

  img {
    width: 75%;
  }

  form {
    margin-top: 10px;

    label {
      text-align: right;
    }
    input {
      margin-left: 7px;
    }
  }
`;

const Item: React.FC<ProductDto> = ({ name, imagePath, description }) => {
  return (
    <ItemWrapper key={name}>
      <img src={imagePath} alt={`${name} product`} />
      <form>
        <label>{name}</label>
        <input type="number" name="quantity" min="0" defaultValue="0" />
      </form>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  text-align: center;
`;
