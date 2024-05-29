import { HttpResponse } from "msw";
import { handlers as optionsHandlers } from "./options";
import { handlers as orderHandlers } from "./order";
import { handlers as productsHandlers } from "./products";
import { handlers as staticHandlers } from "./static";

export const handlers = [
  ...optionsHandlers,
  ...orderHandlers,
  ...productsHandlers,
  ...staticHandlers,
];

interface Params {
  request: Request;
  params: {
    [key: string]: unknown;
  };
  cookies: {
    [key: string]: unknown;
  };
}

export interface HttpResolver {
  (params: Params): HttpResponse | Promise<HttpResponse>;
}
