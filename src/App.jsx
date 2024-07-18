import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductProvider from "./services/contexts/ProductContext";
import BasketProvider from "./services/contexts/BasketContext";

function App() {
  return (
    <ProductProvider>
      <BasketProvider>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
          </Routes>
        </Layout>
      </BasketProvider>
    </ProductProvider>
  );
}

export default App;
