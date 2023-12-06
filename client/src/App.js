import React from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import RootLayout from "./rootLayout";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route element={<RootLayout />}>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
