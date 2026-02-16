import { isAxiosError } from 'axios';

export const getAxiosError = (err: unknown): string => {
  if (!isAxiosError(err)) throw err;
  return err.response?.data?.error ? err.response.data.error : err.message;
};
