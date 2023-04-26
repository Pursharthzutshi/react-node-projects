import './App.css';
import Header from '../src/components/Header/Header';
import Services from "../src/components/Services/Services"
// import Testimonials from "../src/components/Testimonials/Testimonials"
import BestSeller from "../src/components/BestSellerSection/BestSellerSection"
import DownloadMobileApp from './components/DownloadMobileAppSection/DownloadMobileAppSection';
import RestaurantAnalysisInfo from "./components/RestaurantAnalysisInfoSection/RestaurantAnalysisInfoSection"
import SubscribeNewsletter from "./components/SubscribeNewsletterSection/SubscribeNewsletterSection"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      {/* <Testimonials/> */}
      <BestSeller/>
      <DownloadMobileApp/>
      <RestaurantAnalysisInfo/>
      <SubscribeNewsletter/>
      <Footer/>
    </div>
  );
}

export default App;
