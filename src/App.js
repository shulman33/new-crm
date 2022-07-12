import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import LandingPage from "./routes/LandingPage";
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./routes/Footer";
import AboutUs from "./routes/AboutUs";
import MenuBar from "./routes/MenuBar";
import Faq from "./routes/Faq";
import CustomerWelcomeP from "./routes/CustomerWelcomeP";
import Businesses from "./routes/Businesses";
import SignInCustomer from "./routes/NewCustomerLogin";
import SignUpBusiness from "./routes/NewBusinessSignUp";
import SignUpCustomer from "./routes/NewCustomerSignUp";
import SignInBusiness from "./routes/NewBusinessLogin";
import Dashboard from "./routes/Dashboard";
import {useEffect, useState} from "react";



Amplify.configure(awsExports);

function App() {
    const [custermer, setCustermer] = useState(null);
    const [business, setBusiness] = useState(null);

    useEffect(() => {
        const u = localStorage.getItem('custermer');
        u && JSON.parse(u) ? setCustermer(true) : setCustermer(false);
    },[]);

    useEffect(() => {
       localStorage.setItem("custermer", custermer);
    }, [custermer]);
  return (

        <div className="App">
            {!business && (
                <nav>
                    <MenuBar />
                </nav>
            )}
          <Routes>
            <Route path="/" element={<LandingPage />} />
              {!business && <Route path="BusinessLogin" element={<SignInBusiness businessAuth={() => setBusiness(true)} />} />}
              {business && (
                  <>
                      <Route path="businessdashboard" element={<Dashboard />} />
                  </>
              )}
              <Route path="BusinessSignUp" element={<SignUpBusiness />} />
              {!custermer && <Route path="CustomerLogin" element={<SignInCustomer customerAuth={() => setCustermer(true)}/>} />}
              {custermer && (
                  <>
                      <Route path="CustomerWelcome" element={<CustomerWelcomeP />} />
                  </>
              )}

              <Route path="CustomerSignup" element={<SignUpCustomer />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="Faq" element={<Faq />} />
              <Route path="businesses" element={<Businesses />} />
              <Route path="*" element={<LandingPage />} />
          </Routes>
            <Footer />
        </div>



  );
}

export default App;

