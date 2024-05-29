import { http, HttpResponse } from "msw";
import { HttpResolver } from "./index";

const getImageResolver: HttpResolver = async ({ params }) => {
  const { imageId } = params;

  const response = await fetch(require(`../static/images/${imageId}`));
  const buffer = await response.arrayBuffer();
  const contentType = response.headers.get("Content-Type");

  return HttpResponse.arrayBuffer(buffer, {
    headers: {
      "Content-Type": contentType || "image/jpeg",
    },
  });
};

export const handlers = [http.get("/images/:imageId", getImageResolver)];
