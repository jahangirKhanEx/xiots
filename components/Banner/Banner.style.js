import { styled } from "styled-components";
import {
  CustomContainer,
  FlexboxStyle,
  Positioning,
} from "../../styles/common";

export const BannerStyle = styled.header`
  ${Positioning};

  background: url("./assets//images/banner-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::after {
    ${Positioning({ position: "absolute", top: "0", left: "0" })};

    content: "";
    width: 100%;
    height: 100%;
    background: rgba(35, 53, 69, 0.5);
    z-index: 0;
  }

  .banner-content {
    ${Positioning};
    ${FlexboxStyle};
    ${CustomContainer};

    padding: 2rem 1.5rem;
    z-index: 3;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      flex-direction: column;
    }

    .banner-details {
      color: ${({ theme }) => theme.colors.WHITE_COLOR};

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        text-align: center;
      }

      .sub-heading {
        font-weight: 400;
      }

      .title {
        padding: 2rem 0;
      }

      button {
        ${FlexboxStyle};

        padding: 1.5rem 3rem;
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
        border: none;
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
          margin: 2rem auto;
        }

        span {
          ${FlexboxStyle};
        }
      }
    }

    .banner-image {
      ${FlexboxStyle};

      img {
        max-width: 100%;
      }
    }
  }
`;
