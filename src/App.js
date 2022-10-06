import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Introduction } from "./pages/Introduction";
import { Production } from "./pages/Production/Production";
import { UserProfile } from "./pages/UserProfile";
import { New } from "./pages/New/New";
import Header from "./components/Header/Header";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ProductDetail } from "./pages/Production/ProductDetail";
import { NewDetail } from "./pages/New/NewDetail";
import NotFound from "./pages/NotFound";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/production" element={<Production />} />
                <Route path="/user" element={<UserProfile />} />
                <Route path="/new" element={<New />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/production/:id" element={<ProductDetail />} />
                <Route path="/new/new-detail" element={<NewDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
