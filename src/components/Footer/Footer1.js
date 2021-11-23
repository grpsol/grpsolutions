import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-default-1 pb-13 pb-lg-10 ${className}`} {...rest}>
        <div className="container">
          <hr className="border-top border-default-color-2 m-0 p-0" />
          
          <div className="row align-items-center pt-3 pt-lg-22">
            <div className="col-md-6 text-center text-md-left">
              <div className="copyright mb-5">
                <p className="mb-0 font-size-3 text-stone">
                  © GRPS 2021, All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
