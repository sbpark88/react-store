import React from "react";
import GlobalStyle from "./GlobalStyle";
import Summary from "./pages/Summary";
import styled from "styled-components";
import Order from "./pages/Order";

function App() {
  return (
    <Wrapper>
      {/*<GlobalStyle />*/}
      <Order />
      <Summary />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div.attrs({ className: "App" })`
  //text-align: center;
  margin: 30px;
`;
