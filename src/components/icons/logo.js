import React from "react";
import { Image } from "theme-ui";
import logoCompany from "../../assets/images/logo.png";

const Logo = ({ white, ...props }) => {
  return <Image src={logoCompany} {...props} />;
};

export default Logo;
