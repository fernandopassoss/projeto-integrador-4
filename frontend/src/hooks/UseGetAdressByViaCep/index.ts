import { UseQueryResult, useQuery } from "react-query";
import { reactQueryCacheTime } from "../../config/react-query";
import { viaCepService } from "../../services/viacep-service";
import { ResponseViaCep } from "../../types/responseViaCep";
import { useToast } from "../UseToast";

export const useGetAdressByViaCep = (
  cep: string
): UseQueryResult<ResponseViaCep> => {
  const { handleToast } = useToast();

  return useQuery(["via-cep", cep], () => viaCepService(cep), {
    enabled: false,
    cacheTime: reactQueryCacheTime(),
    retry: false,
    onError: () => {
      handleToast("Houve um erro ao encontrar seu endereço, digite nos campos.");
    },
  });
};
