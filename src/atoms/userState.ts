import { atom, selector } from "recoil";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

export const currentUserNameState = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const server = "https://jsonplaceholder.typicode.com/users";
    const userId = get(currentUserIDState);
    const response = await axios.get<User>(`${server}/${userId}`);
    return response.data.name;
  },
});
