import { useParams } from "react-router";
import Breadcrumbs from "../../components/BreadCrumbs";
import AddToCartButton from "../../components/AddToCartBtn";
import useProduct from "../../hooks/useProduct";
import { Product } from "../../types/type";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useProduct();
  const product = data?.find((item: Product) => item._id.toString() === id);

  if (!product) {
    return <h1>محصولی یافت نشد!</h1>;
  }

  return (
    <div className="flex flex-col gap-4 w-[90%]">
      <Breadcrumbs
        name={product?.name}
        step1="categories"
        step2={product.category}
      />
      <section className="w-full p-8 bg-white/45 shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
        <figure className="md:w-1/3 flex flex-col items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
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
            <AddToCartButton
              name={product.name}
              price={product.price}
              src={product.src}
              id={product.id}
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductDetail;
