import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertList from "../../components/propertylist/PList";
import Fp from "../../components/featuredproperty/Fp";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeConatiner">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertList />
        <h1 className="homeTitle">Homes guests love</h1>
        <Fp />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
