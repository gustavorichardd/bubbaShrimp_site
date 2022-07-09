import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import CompanyController from "./controllers/company";

import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [company, setCompany] = useState(null)

  useEffect(() => {
    CompanyController.getCompanyData().then(response => {
      console.log(response)
      if (response.status === 200) {
        setCompany(response.data)
      }
    })
  }, [])


  return (
    <div className="site-content">
      <Header />
      {/* <Home /> */}

      <Footer />
    </div>
  )
}

export default App;
