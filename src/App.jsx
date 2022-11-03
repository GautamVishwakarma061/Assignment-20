// log out
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainProductList from "./MainProductList";
import NewPageDetail from "./NewPageDetail";
import { Routes, Route } from "react-router-dom";
import NoData from "./NoData";
import Login from "./Login";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Dummy from "./Dummy";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import Alert from "./Alert";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-y-auto">
        <UserProvider>
          <CartProvider>
            <AlertProvider>
              <Alert />
              <Navbar />

              <div className="grow">
                <Routes>
                  <Route
                    index
                    element={
                      <UserRoute>
                        <MainProductList />
                      </UserRoute>
                    }
                  />

                  <Route
                    path="/products/:id"
                    element={
                      <UserRoute>
                        <NewPageDetail />
                      </UserRoute>
                    }
                  />
                  <Route path="/" element={<MainProductList />} />
                  <Route
                    path="/login"
                    element={
                      <AuthRoute>
                        <Login />
                      </AuthRoute>
                    }
                  />
                  {/* <Route
                    path="/"
                    element={
                      <UserRoute>
                        <MainProductList />
                      </UserRoute>
                    }
                  /> */}
                  <Route
                    path="/Signup"
                    element={
                      <AuthRoute>
                        <Signup />
                      </AuthRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <UserRoute>
                        <Dummy />
                      </UserRoute>
                    }
                  />
                  <Route path="/Forgot" element={<Forgot />} />
                  <Route
                    path="*"
                    element={
                      <UserRoute>
                        <NoData />
                      </UserRoute>
                    }
                  />
                </Routes>
              </div>
            </AlertProvider>
          </CartProvider>
        </UserProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;

// const random = Math.floor(Math.random() * 10) + 1;
// console.log("random number is", random);
