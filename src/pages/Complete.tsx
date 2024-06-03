import React, {
  Fragment,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { OrderContext } from "../context/OrderContext";
import Loading from "../components/Loading";
import axios from "axios";
import styled from "styled-components";
import { OrderInfo } from "../mocks/db/order";
import { useNavigate } from "react-router-dom";
import { promiseWrapper } from "../utils/wrapper";

const Complete: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>주문 진행중</div>
      <Suspense fallback={<Loading />}>
        <Purchased />
        <button onClick={() => navigate("/")}>첫 페이지로</button>
      </Suspense>
    </>
  );
};

export default Complete;

const Purchased: React.FC = () => {
  const [orderHistory, setOrderHistory] = useState<OrderInfo[]>();
  const { totals } = useContext(OrderContext);

  const getData = async () => {
    const promise = axios.post("/order", { price: totals.total });
    setOrderHistory(promiseWrapper(promise));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PurchasedWrapper>
      <h2>주문이 완료되었습니다</h2>
      <h3>주문 내역</h3>
      <div className="order-history">
        <h5>주문 번호</h5>
        <h5>주문 금액</h5>
        {orderHistory?.map((orderInfo) => (
          <Fragment key={orderInfo.orderNumber}>
            <div>{orderInfo.orderNumber}</div>
            <div>{orderInfo.price}</div>
          </Fragment>
        ))}
      </div>
    </PurchasedWrapper>
  );
};

const PurchasedWrapper = styled.div`
  width: 300px;

  .order-history {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    margin-bottom: 30px;

    h5,
    div {
      padding: 10px;
      border: 1px solid #555;
      box-sizing: border-box;
    }
  }
`;
