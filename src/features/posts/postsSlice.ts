import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";  // 이렇게 import 되면 'useGetPostsQuery' 가 생성되지 않는다.

export interface PostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type PostApiResponse = PostItem[];

export interface PostApiQuery {
  limit?: number;
}

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<PostApiResponse, PostApiQuery>({
      query: ({ limit = 100 }) => `?limit=${limit}`,
      providesTags: (result, error, arg, meta) => [
        { type: "Posts", id: arg.limit },
      ],
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
