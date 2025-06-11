import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyLink = ({ to, children }) => {
  const { navigate } = useContext(RouterContext);
  const handleClick = () => {
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default MyLink;
