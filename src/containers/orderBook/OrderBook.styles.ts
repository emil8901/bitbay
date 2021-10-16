import styled from "styled-components";

const OrderBook = styled.div`
  display: flex;
  justify-content: center;
`;

const OrderBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 800px;
`;

const OrderBookHeader = styled.div`
  background: rgba(31, 94, 190, 0.5);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px;
`;

const OrderBookList = styled.div`
  display: flex;
  min-height: 328px;
  max-height: 328px;
  overflow: hidden;
  width: 100%;

  & > div {
    flex: 1;
  }
`;

const OrderBookListTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export default {
  OrderBook,
  OrderBookContainer,
  OrderBookHeader,
  OrderBookList,
  OrderBookListTitle,
};
