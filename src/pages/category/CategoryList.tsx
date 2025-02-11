import { useQuery } from "@tanstack/react-query";
import CategoryCart from "./CategoryCart";
import { getProduct } from "../../api/product";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
  });

  return (
    <div className="flex gap-6 my-8 flex-wrap">
      {data?.map(
        (item: {
          price: string;
          name: string;
          _id: string;
          category: string;
          image: string;
        }) => {
          return (
            <CategoryCart
              key={item._id}
              name={item.name}
              price={item.price}
              category={item.category}
              src={item.image}
              id={item._id}
            />
          );
        }
      )}
    </div>
  );
};

export default CategoryList;
