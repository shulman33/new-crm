import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import LandingPage from "./routes/LandingPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./routes/Footer";
import AboutUs from "./routes/AboutUs";
import MenuBar from "./routes/MenuBar";
import Faq from "./routes/Faq";
import CustomerWelcomeP from "./routes/CustomerWelcomeP";
import Businesses from "./routes/Businesses";



Amplify.configure(awsExports);

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <MenuBar />
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="CustomerWelcomeP" element={<CustomerWelcomeP />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="businesses" element={<Businesses />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

  );
}

export default App;

