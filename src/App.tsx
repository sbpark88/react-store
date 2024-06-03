import React, { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import Summary from "./pages/Summary";
import styled from "styled-components";
import Order from "./pages/Order";
import Complete from "./pages/Complete";
import { Route, Routes } from "react-router-dom";
import ErrorBanner from "./components/ErrorBanner";
import Loading from "./components/Loading";

function App() {
  return (
    <Wrapper>
      {/*<GlobalStyle />*/}
      <Routes>
        <Route errorElement={<ErrorBanner />}>
          <Route index element={<Order />} />
          <Route path="summary" element={<Summary />} />
          <Route path="complete" element={<Complete />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div.attrs({ className: "App" })`
  //text-align: center;
  margin: 30px;
`;
