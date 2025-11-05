
import "./resourse/css/bootstrap.css";
import "./resourse/css/styles.css";
import Header from "./Component/Header/Header.jsx";
import Alert from "./Component/Alert/Alert.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Section1 from "./Component/Section1/Section1.jsx";
import Section2 from "./Component/Section2/Section2.jsx";
import Section3 from "./Component/Section3/Section3.jsx";
import Section4 from "./Component/Section4/Section4.jsx";
import Section5 from "./Component/Section5/Section5.jsx";
import Section6 from "./Component/Section6/Section6.jsx";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
