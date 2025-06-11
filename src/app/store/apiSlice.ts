import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    addData: builder.mutation<unknown, { name: string; age: number }>({
      query: (body) => ({
        url: "data",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddDataMutation } = apiSlice;
