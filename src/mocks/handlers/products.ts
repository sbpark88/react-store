import { HttpResolver } from "./index";
import { http, HttpResponse } from "msw";
import products from "../db/products";

const getProductsResolver: HttpResolver = () => {
  return HttpResponse.json(products);
};

const postProductResolver: HttpResolver = async ({ request }) => {
  const newPost = await request.json();
  // code...
  return HttpResponse.json({ id: "abc-123" }, { status: 201 });
};

const putProductResolver: HttpResolver = async ({ request, params }) => {
  const { id } = params;
  const updatePost = await request.json();
  // code...
  if (id === "abc-123") {
    return HttpResponse.json("success", { status: 204 });
  } else {
    return HttpResponse.error();
  }
};

const deleteProductResolver: HttpResolver = ({ params }) => {
  const { id } = params;
  if (id === "abc-123") {
    return HttpResponse.json("success", { status: 200 });
  } else {
    return HttpResponse.error();
  }
};

export const handlers = [
  http.get("/products", getProductsResolver),
  http.put("/products/:id", postProductResolver),
  http.delete("/products", deleteProductResolver),
];
