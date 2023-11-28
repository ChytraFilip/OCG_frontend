import Axios, { type AxiosError, type AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  baseURL: `http://localhost:5173/api`,
}); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const ocgClientFetchInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    //cancelToken: source.token,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type, so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;
