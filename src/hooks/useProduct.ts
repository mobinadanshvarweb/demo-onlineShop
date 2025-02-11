import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/product";

const useProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
  });
};

export default useProduct;
