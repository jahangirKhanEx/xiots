import React from "react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

import bannerImage from "../../public/assets/icons/banner-mobile-icon.png";

import { BannerStyle } from "./Banner.style";

function Banner() {
  return (
    <BannerStyle>
      <article className="banner-content">
        <article className="banner-details">
          <h5 className="sub-heading">Free Changes for Life</h5>
          <h1 className="title">Hand-Made Website for Your Business</h1>

          <button>
            <span className="icon">
              <FaAngleDoubleRight />
            </span>

            <p className="text">Book Call</p>
          </button>
        </article>

        <picture className="banner-image">
          <Image src={bannerImage} alt="banner icon" />
        </picture>
      </article>
    </BannerStyle>
  );
}

export default Banner;
