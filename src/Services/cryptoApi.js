/** @format */
import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiheaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0458970b14msh120104ce63c6537p170dd0jsnede644738ea4",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createrequest = ( url) => ({url ,headers:cryptoApiheaders})
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createrequest(`/coins?limit=${count}`),
    }),

    getCryptoDatails: builder.query({
      query: (coinId) => createrequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createrequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDatailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;



