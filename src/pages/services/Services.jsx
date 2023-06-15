import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import css from "./Services.module.css";

const Services = () => {
  return (
    <>
      <Header />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
        }}>
        Services Coming Soon...
      </h1>
      <Footer />
    </>
  );
};

export default Services;
