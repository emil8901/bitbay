import styled from "styled-components";

const OrderRow = styled.div<{ ask?: boolean }>`
  display: flex;
  padding: 6px 4px;
  transition: 0.3s ease background;

  &:nth-child(2n) {
    background: #f7f7f7;
  }

  & > div {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 0 2px;
  }

  &:hover {
    background: ${({ ask }) => {
      return ask ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)";
    }};
  }
`;

export default { OrderRow };
