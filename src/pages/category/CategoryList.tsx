import categoryData from "../../data/category-data";
import CategoryCart from "./CategoryCart";

const CategoryList = () => {
  return (
    <div className="flex justify-between my-8 flex-wrap ">
      {categoryData.map((item) => {
        return (
          <CategoryCart
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
