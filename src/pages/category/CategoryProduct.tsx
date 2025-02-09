import { useParams } from "react-router";
import categoryData from "../../data/category-data";
import CategoryCart from "./CategoryCart";
import Breadcrumbs from "../../components/BreadCrumbs";
import NoData from "../../components/NoData";

const CategoryProduct = () => {
  const { category } = useParams();
  const data = categoryData.filter((item) => item.category === category);
  const name = data.map((item) => item.category);
  return (
    <div className="flex flex-col">
      <Breadcrumbs step1="category" name={name[0]} />
      <div className="w-full flex items-center gap-4 flex-wrap">
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <CategoryCart
                category={item.category}
                id={item.id}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })
        ) : (
          <NoData src="/category" />
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
