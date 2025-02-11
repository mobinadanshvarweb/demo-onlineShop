import { useQuery } from "@tanstack/react-query";
import { getNavbar } from "../api/navbar";

const useNavbar = () => {
  return useQuery({
    queryKey: ["navbar"],
    queryFn: getNavbar,
  });
};

export default useNavbar;
