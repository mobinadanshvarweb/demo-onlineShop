import { useParams } from "react-router";
import CategoryCart from "./CategoryCart";
import Breadcrumbs from "../../components/BreadCrumbs";
import NoData from "../../components/NoData";
import useProduct from "../../hooks/useProduct";
import { Product } from "../../types/type";

const CategoryProduct = () => {
  const { category } = useParams();
  const { data } = useProduct();

  const data1 = data?.filter((item: Product) => item.category === category);
  const name = data1?.map((item: Product) => item?.category);
  console.log(category);

  return (
    <div className="flex flex-col">
      <Breadcrumbs step1="categories" name={name[0]} />
      <div className="w-full flex items-center gap-4 flex-wrap">
        {data1?.length > 0 ? (
          data1?.map((item: Product) => {
            return (
              <CategoryCart
                src={item.image}
                category={item.category}
                id={item._id}
                name={item.name}
                price={item.price}
                key={item._id}
              />
            );
          })
        ) : (
          <NoData src="/categories" />
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
