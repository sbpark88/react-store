import { http, HttpResponse } from "msw";
import { HttpResolver } from "./index";
import options from "../db/options";

const getOptionsResolver: HttpResolver = () => {
  return HttpResponse.json(options);
};

export const handlers = [http.get("/options", getOptionsResolver)];
