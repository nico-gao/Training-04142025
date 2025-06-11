import React, { Children, useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyRoutes = ({ children }) => {
  const { currentPath } = useContext(RouterContext);

  let element;
  Children.forEach(children, (child) => {
    if (currentPath === child.props.path) {
      element = child;
    }
  });
  return element;
};

export default MyRoutes;
