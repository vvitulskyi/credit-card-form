import React from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/index.scss";


const App = () => {
  return (
    <div className="card">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
