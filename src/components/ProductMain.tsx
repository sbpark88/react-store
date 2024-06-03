import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import ProductDto from "../dto/ProductDto";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import { OrderContext } from "../context/OrderContext";

const ProductMain: React.FC = () => {
  const [products, setProducts] = useState<ProductDto[]>();
  const { totals, handleUpdateProducts } = useContext(OrderContext);

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
      <p>총 가격: ￦{totals.products.toLocaleString()}</p>
      <Wrapper>
        {products ? (
          products.map((product) => (
            <Item {...product} handler={handleUpdateProducts} />
          ))
        ) : (
          <Loading />
        )}
      </Wrapper>
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

interface ItemProps extends ProductDto {
  handler: (name: string, count: number) => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  imagePath,
  description,
  handler,
}) => {
  const { orderCounts } = useContext(OrderContext);

  return (
    <ItemWrapper key={name}>
      <img src={imagePath} alt={`${name} product`} />
      <form>
        <label>{name}</label>
        <input
          type="number"
          name="quantity"
          min="0"
          defaultValue="0"
          value={orderCounts.products[name] ? orderCounts.products[name] : 0}
          onChange={(event) => handler(name, parseInt(event.target.value))}
        />
      </form>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  text-align: center;
`;
