import React from "react";
import {BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
    "pk_test_51Q27uu08kVnHdA4jEicDhe0lc1e4vgxwxn9xhUjV5R4fczjFSUMNeiU37y6xiC5daMbl5AGGkCncF5N2tvQSn2PQ004vJrS3Qv"
);

// const stripePromise = loadStripe(
//     "pk_test_51OU6YoIrgvX7vjwlwFwZFFmBbuXRo77ewG49UZBndLITKEtINgOsTCmKbx4dvva5opJQYlTggPJ3SuK3HpprL1Pj006REMjwGf"
// );
function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/payments" element={<ProtectedRoute
                            msg={"you must log in to pay"}
                            redirect={"/payments"}
                        >
                            <Elements stripe={stripePromise}>
                                <Payment />
                            </Elements>
                        </ProtectedRoute>
                    }
                />
                <Route path="/orders" element={
                        <ProtectedRoute
                            msg={"you must log in to access your orders"}
                            redirect={"/orders"}
                        >
                            <Orders />
                        </ProtectedRoute>
                    }
                />
                <Route path="/category/:categoryName" element={<Results />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default Routing;
