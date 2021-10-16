import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Contactus from "./Contactus/Contactus";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Register from "./Register/Register";
import Blogs from "./Blog/Blogs/Blogs";
import OurExpertices from "./OurExpertises/OurExpertices";
import Aboutus from "./AboutUs/Aboutus";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/ourexprtice">
              <OurExpertices></OurExpertices>
            </Route>

            <Route path="/about">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>

            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>

            <Route path="/singin">
              <Signin></Signin>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
