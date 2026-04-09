import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const reactQueryCacheTime = (time = 3) => time * 60 * 1000;