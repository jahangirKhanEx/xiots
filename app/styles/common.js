import css from "styled-jsx/css";

export const FlexboxStyle = ({ align, justify, direction, gap }) => css`
  display: flex;
  align-items: ${align || "center"};
  justify-content: ${justify || "center"};
  gap: ${gap || "1rem"};
  flex-direction: ${direction || "row"};
`;

export const GridBoxStyle = ({ columns, align, gap }) => css`
  display: grid;
  grid-template-columns: ${columns || "center"};
  align-items: ${align || "center"};
  grid-gap: ${gap || "1rem"};
`;

export const Positioning = ({
  position,
  top,
  right,
  bottom,
  left,
  transform,
}) => css`
  position: ${position || "relative"};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
  transform: ${transform};
`;

export const CustomContainer = css`
  max-width: 132rem;
  margin: 0 auto;
`;

export const CommonSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
