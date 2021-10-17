import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import Pages from "./components/mainpages/Pages";
import MediaFooter from "./components/mediaFooter/MediaFooter";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/subFooter/SubFooter";
import Banner from "./components/banner/Banner";
import Filters from "./components/filter/Filters";
import I18n from "./I18n";
import Fires from "./Fires";

function App() {
  return (
    <DataProvider>
      <Router>
        <div classNameName="App">
          <I18n />
          <Header />
          {/* <Fires /> */}
          <Filters />
          {/* <Banner /> */}
          <Pages />
          <SubFooter />
          <MediaFooter />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
