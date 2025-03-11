import React, { useState } from "react";
import Item from "./item";

const App = () => {
  return (
    <div className="bg-bg">
      <h1 className="text-theme">App</h1>
      <Item data={"123"} />
      <Item data={""} />
      <Item data="함수확인" fn={() => console.log(data)} />
    </div>
  );
};

export default App;
