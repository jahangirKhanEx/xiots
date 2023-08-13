import { styled } from "styled-components";
import {
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
  GridBoxStyle,
  Positioning,
} from "../../styles/common";

export const NavbarStyle = styled.nav`
  ${Positioning({ position: "sticky", top: "0", left: "0" })};

  width: 100%;
  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  z-index: 10;

  .navbar-content {
    ${GridBoxStyle({ columns: "1fr 2fr", gap: "3rem" })};
    ${CustomContainer};

    padding: 2.5rem 1.5rem;

    .logo {
      font-size: 2.5rem;

      span {
        color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      }
    }

    .menu-icon {
      cursor: pointer;

      display: none;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        ${FlexboxStyle({ direction: "column", gap: ".3rem" })};

        align-items: flex-end;
      }

      .icon {
        content: "";

        display: block;
        width: 2rem;
        height: 0.2rem;
        background: ${({ theme }) => theme.colors.GUN_METAL_COLOR};
        transition: 0.3s all linear;

        &:nth-child(1) {
          display: ${(props) => (props.menuActive ? "none" : "")};
        }

        &:nth-child(2) {
          transform: ${(props) => (props.menuActive ? "rotate(45deg)" : "")};
        }

        &:nth-child(3) {
          transform: ${(props) =>
            props.menuActive ? "translateY(-.50rem) rotate(-45deg)" : ""};
        }
      }
    }

    .contact-content-wrapper {
      ${FlexboxStyle({ justify: "space-between" })};

      flex: 1;

      @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
        flex-direction: column;
        align-items: flex-start;
      }

      .contact-content {
        ${FlexboxStyle({ justify: "flex-start" })};

        .icon {
          ${FlexboxStyle};

          width: 3rem;
          height: 3rem;
          border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
          color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
          border-radius: 50%;
          font-size: 1.5rem;
        }

        figcaption {
          .heading {
            color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
            font-weight: 500;
          }
        }
      }

      .phone-details {
        ${Positioning}
        ${FlexboxStyle({ justify: "flex-start" })};

        .icon-wrapper {
          ${Positioning({ position: "absolute", top: "-4rem", left: "-7rem" })}

          background: ${({ theme }) => theme.colors.CHARCOAL_COLOR};
          padding: 2.5rem 0.5rem 0.5rem 0.5rem;
          border-radius: 0 0 8rem 8rem;

          @media (max-width: ${({ theme }) =>
              theme.breakPoints.mediumDevices}) {
            position: unset;
            padding: unset;
            background: none;
            border-radius: unset;
          }

          .icon {
            ${FlexboxStyle};

            background: ${({ theme }) =>
              theme.colors.CHARCOAL_COLOR_DARK_COLOR};
            color: ${({ theme }) => theme.colors.WHITE_COLOR};
            padding: 1rem;
            font-size: 2rem;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: 0.3rem solid
              ${({ theme }) => theme.colors.CHARCOAL_COLOR_LIGHT_COLOR};

            @media (max-width: ${({ theme }) =>
                theme.breakPoints.mediumDevices}) {
              width: 3rem;
              height: 3rem;
              border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
              color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
              border-radius: 50%;
              background: unset;
              padding: 0.7rem;
            }
          }
        }

        .phone-no {
          font-size: 2rem;

          @media (max-width: ${({ theme }) =>
              theme.breakPoints.mediumDevices}) {
            font-weight: 700;
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;

export const MenusStyle = styled.article`
  background: ${({ theme }) => theme.colors.GUN_METAL_COLOR};
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
    ${Positioning({ position: "fixed", top: "7rem", left: "0" })};

    height: ${(props) => (props.menuActive ? "10rem " : "0rem")};
    width: 100%;
    opacity: ${(props) => (props.menuActive ? "1" : 0)};
    transition: 0.3s all linear;
  }

  .menu-wrapper {
    ${FlexboxStyle({ justify: "flex-start", gap: "2rem" })};
    ${CustomContainer};
    ${CommonSpacing};

    list-style: none;

    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDevices}) {
      flex-direction: column;
    }

    li {
      a {
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
        font-size: 1.4rem;
        text-transform: uppercase;
      }
    }
  }
`;
