import React from "react";
import Grid from "./Components/Grid";
import "./styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
      <Grid />
    </>
  );
};

export default App;
