import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import WishList from "./pages/wishlist/WishList";
import NotFound from "./pages/not-found/NotFound";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Category from "./pages/category/Category";
import CategoryProduct from "./pages/category/CategoryProduct";
import ProductDetail from "./pages/category/ProductDetail";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/home", element: <Navigate to="/" replace /> }, // ریدایرکت /home به /
      { path: "/wishlist", element: <WishList /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/categories", element: <Category /> },
      { path: "/categories/:category", element: <CategoryProduct /> },
      { path: "/categories/:category/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
