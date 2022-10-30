import React, { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Context";
const withProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;

export const withUser = withProvider(UserContext);
export const withAlert = withProvider(AlertContext);
export const withCart = withProvider(CartContext);
