import { AxiosPromise } from "axios";

export const promiseWrapper = <T>(promise: AxiosPromise<T>) => {
  let status = "pending";
  let result: T;

  const suspender = promise
    .then((response) => {
      status = "success";
      result = response.data;
    })
    .catch((response) => {
      status = "error";
      result = response.error;
    });

  return () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "success":
        return result;
      case "error":
        return result as any;
      default:
        throw new Error("Unknown status");
    }
  };
};
