import { HttpResolver } from "./index";
import { delay, http, HttpResponse } from "msw";
import { orderHistory, OrderInfo } from "../db/order";

const generateOrderNumber = () => Math.floor(Math.random() * 1000000);

const postOrderResolver: HttpResolver = async ({ request }) => {
  const price = await request.json().then((totals) => totals.price);
  const orderNumber = generateOrderNumber();
  const newOrder: OrderInfo = { orderNumber, price };
  orderHistory.push(newOrder);
  await delay(5000);
  return HttpResponse.json(orderHistory, { status: 201 });
};

export const handlers = [http.post("/order", postOrderResolver)];
