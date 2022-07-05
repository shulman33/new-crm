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
import DummyLogin from "./routes/DummyLogin"
import SignInCustomer from "./routes/NewCustomerLogin";
import SignUpBusiness from "./routes/NewBusinessSignUp";
import SignUpCustomer from "./routes/NewCustomerSignUp";
import SignInBusiness from "./routes/NewBusinessLogin";



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
                <Route path="BussinessLogin" element={<SignInBusiness />} />
                    <Route path="BussinessSignUp" element={<SignUpBusiness />} />
                <Route path="CustomerLogin" element={<SignInCustomer />} />
                    <Route path="CustomerWelcome" element={<CustomerWelcomeP />} />
                    <Route path="CustomerSignup" element={<SignUpCustomer />} />
                        <Route path="CustomerWelcome" element={<CustomerWelcomeP />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="Faq" element={<Faq />} />
                <Route path="businesses" element={<Businesses />} />
                <Route path="dummylogin" element={<DummyLogin />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

  );
}

export default App;

