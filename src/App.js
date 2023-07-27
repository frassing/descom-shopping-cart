import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { CartPage } from "./pages/Cart/CartPage";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";

import { AppContext } from "./store/AppContext";

const initialState = {
  type: null,
  mode: null,
  shoppingCart: [],
  activeProduct: null
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<CartPage />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
