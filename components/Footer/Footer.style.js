import { styled } from "styled-components";
import {
  CustomContainer,
  FlexboxStyle,
  GridBoxStyle,
} from "../../styles/common";

export const FooterStyle = styled.footer`
  background: ${({ theme }) => theme.colors.GUN_METAL_LIGHT_COLOR};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  width: 100%;

  .footer-container {
    ${GridBoxStyle({ gap: "10rem", align: "flex-start" })};
    ${CustomContainer};

    padding: 5rem 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      grid-template-columns: 1fr;
    }

    .footer-content {
      .heading {
        font-size: 1.8rem;

        span {
          color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        }
      }

      .description {
        margin: 2rem 0;
        color: ${({ theme }) => theme.colors.SLATE_GRAY_COLOR};
        font-weight: 400;
      }

      .socail-site {
        ${FlexboxStyle({ justify: "flex-start" })};

        list-style: none;
        margin-top: 1rem;

        li {
          a {
            ${FlexboxStyle};

            border: 0.1rem solid ${({ theme }) => theme.colors.SLATE_GRAY_COLOR};
            padding: 1rem;
            width: 4rem;
            height: 4rem;

            > svg {
              width: 1.5rem;
            }
          }
        }
      }

      .footer-menus {
        list-style: none;
        margin-top: 2rem;

        li {
          a {
            ${FlexboxStyle({ justify: "flex-start" })};

            color: ${({ theme }) => theme.colors.SLATE_GRAY_COLOR};
            font-weight: 400;
            padding: 1rem 0;
            transition: 0.3s all linear;

            &:hover {
              color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
            }

            span {
              > svg {
                font-size: 1.6rem;
              }
            }
          }
        }
      }
    }
  }
`;

export const FooterBottomStyle = styled.article`
  background: ${({ theme }) => theme.colors.GUN_METAL_COLOR_TWO_COLOR};

  .footer-bottom-container {
    ${CustomContainer};

    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.SLATE_GRAY_COLOR};
  }
`;
