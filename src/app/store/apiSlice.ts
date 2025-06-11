import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User{
  name: string;
  email: string;
  role: string
}


interface AddDataResponse {
  insertedId: string;
  success: boolean;
  message: string
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    addData: builder.mutation<AddDataResponse, User>({
      query: (body) => ({
        url: "data",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddDataMutation } = apiSlice;
