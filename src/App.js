import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { CartPage } from "./pages/Cart/CartPage";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { FooterPartial } from "./partials/FooterPartial/FooterPartial";

import { AppContext } from "./store/AppContext";

const initialState = {
  type: null,
  mode: null,
  cart: [],
  activeProduct: {},
  products: []
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          < HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<CartPage />} />
          </Routes>
          < FooterPartial />
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
