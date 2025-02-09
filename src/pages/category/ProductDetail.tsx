import { useParams } from "react-router";
import categoryData from "../../data/category-data";
import Breadcrumbs from "../../components/BreadCrumbs";
import AddToCartButton from "../../components/AddToCartBtn";

const ProductDetail = () => {
  const { id } = useParams();
  const product = categoryData.find((item) => item.id.toString() === id);

  if (!product) {
    return <h1>محصولی یافت نشد!</h1>;
  }

  return (
    <>
      <Breadcrumbs
        name={product.name}
        step1="category"
        step2={product.category}
      />
      <section className="w-full my-12 p-8 bg-white/45 shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
        <figure className="md:w-1/3 flex flex-col items-center gap-4">
          <img
            src="/img/banner.jpg"
            alt={product.name}
            className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <article className="flex-1 flex flex-col gap-5 justify-center">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl text-gray-900">{product.name}</h1>
            <span>❤️</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">
            {product.price} تومان
          </span>
          <p className="text-gray-700 leading-relaxed text-justify">
            {product.description}
          </p>

          <div className="flex items-center justify-end gap-4 mt-4">
            <AddToCartButton />
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductDetail;
