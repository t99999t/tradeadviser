
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import About from "./components/About";
import Unauthorized from "./components/Unauthorized";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import ROLES from "./roles_list";
import Account from "./components/Account"; 
import YouTubeVideo from "./components/YoutubeVideo";
import News from "./components/News";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Employee from "./components/Employee";
import NotFound  from "./components/NotFound";
import Layout from "./components/Layout";
import Maps from "./components/Map";
import MyBot from "./components/Bot";
import USER_LIST from "./components/USER_LIST";
import Api from "./components/Api";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Ecommerce from "./components/Ecommerce";
import Payments from "./components/Payment";
import CoinbasePro from "./components/CoinbasePro";
import BinanceUs  from "./components/BinanceUs";
import Oanda from "./components/Oanda";
import Home from "./components/Home";
import Profile from "./components/UserProfile";
import Setting from "./components/Setting";
import Download  from "./components/Download";
import LicenseManagment from "./components/LicenseManagment";
import Search from "./components/Search";

import Calendar from "./components/Calendar";
import ExChanges from "./components/ExChanges";
import Trading from "./components/Trading";
import ChatFeed from "./components/ChatFeed";
import Events from "./components/Events";
import Invest from "./components/Invest";
import Wallets from "./components/Wallet";
import {Container} from "react-bootstrap";
import {Routes,Route} from "react-router-dom"
import MarketInfo from "./components/MarketInfo";
import GitHub from "./components/GitHub";
import  Charts from "./components/Charts";
//import ContactUs from "./components/ContactUs";
//import Terms from "./components/Terms";
//import Privacy from "./components/Privacy";
//import FAQ from "./components/FAQ";
//import TermsOfUse from "./components/TermsOfUse";
//import PrivacyPolicy from "./components/PrivacyPolicy";
import Rent from "./components/Rent";
import Roommate from "./components/Roommate";

import "./App.css";

function Developer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Developer</h2>
                    <h3>Add two numbers</h3>

                </div>
            </div>
        </div>
    );
}

function Platform() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Platform</h2>
                </div>
            </div>
        </div>
    )
}



function Calculator() {
    return (
        <Container>
            <div className="row">
                <div className="col-md-12">
                    <h2>Calculator</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Add</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Subtract</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Multiply</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Divide</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </Container>
    )

}




 function App() {
            return (
                <>{(<Routes>
                     <Route path="/" element={<Layout/>}>
                           {/* public routes */}
                           <Route path="login" element={<Login/>}/>
                           <Route path="register" element={<Register/>}/>
                           <Route path={'forgot/password'} element={<ForgotPassword/>}/>
                           <Route path= {'reset/password/'+localStorage.getItem('email') }  element={<ResetPassword/>}/>
                            <Route path="contact" element={<Contact/>}/>
                           <Route path="about" element={<About/>}/>

                        <Route path="unauthorized" element={<Unauthorized/>}/>
                           {/* private  */}
                           <Route element={<PersistLogin/>}>

                              <Route element={<RequireAuth allowedRoles={[ROLES.user,ROLES.admin,ROLES.manager]}/>}>
                                   <Route path="/" element={<Home/>}/>
                                   <Route path="youtube" element={<YouTubeVideo/>}/>
                                   <Route path="github" element={<GitHub/>}/>
                                   <Route path="search" element={<Search/>}/>
                                   <Route path="events" element={<Events/>}/>
                                   <Route path="news" element={<News/>}/>
                                   <Route path="users" element={<Users/>}/>
                                   <Route path="chat" element={<ChatFeed/>}/>

                                   <Route path="calculator" element={<Calculator/>}/>
                                   <Route path="download" element={<Download/>}/>
                                   <Route path="license/management" element={<LicenseManagment/>}/>
                                   <Route path="dashboard" element={<Dashboard/>}/>
                                   <Route path="employee" element={<Employee/>}/>

                                   <Route path="calendar" element={<Calendar/>}/>
                                   <Route path="chart" element={< Charts/>}/>
                                   <Route path="platform" element={<Platform/>}/>
                                   <Route path="bot" element={<MyBot/>}/>
                                   <Route path="api/users/id" element={<Users/>}/>
                                   <Route path="api/users/list" element={<USER_LIST/>}/>
                                   <Route path="map" element={<Maps/>}/>
                                   <Route path="wallet" element={<Wallets/>}/>
                                   <Route path="account" element={<Account/>}/>
                                   <Route path="calendar" element={<Calendar/>}/>
                                   <Route path="api" element={<Api/>}/>
                                   <Route path="logout" element={<Logout/>}/>
                                   <Route path="ecommerce" element={<Ecommerce/>}/>
                                   <Route path="api/payments" element={<Payments/>}/>
                                   <Route path="coinbase" element={<CoinbasePro/>}/>
                                   <Route path="market/info" element={<MarketInfo/>}/>

                                   <Route path="binance/us" element={<BinanceUs/>}/>
                                   <Route path="oanda" element={<Oanda/>}/>
                                   <Route path="profile" element={<Profile/>}/>
                                   <Route path="settings" element={<Setting/>}/>
                                   <Route path="exchanges" element={<ExChanges/>}/>
                                   <Route path="trade" element={<Trading/>}/>
                                   <Route path="rent" element={<Rent/>}/>
                                     <Route path="roommate" element={<Roommate/>}/>
                           
                                   {/*Editors*/}
                                   <Route element={<RequireAuth allowedRoles={[ROLES.editor]}/>}>
                                       <Route path="editor" element={<Editor/>}/>
                                   </Route>
                                   {/*Admin*/}
                                   <Route element={<RequireAuth allowedRoles={[ROLES.admin]}/>}>
                                       <Route path="admin" element={<Admin/>}/>
                                   </Route>
                                   {/*Lounge*/}
                                   <Route
                                       element={<RequireAuth allowedRoles={[ROLES.editor, ROLES.admin, ROLES.owner]}/>}>
                                       <Route path="lounge" element={<Lounge/>}/>
                                   </Route>
                                   <Route element={<RequireAuth allowedRoles={[ROLES.developer,ROLES.admin]}/>}>
                                       <Route path="developer" element={<Developer/>}/>
                                   </Route>
          </Route>
            {/* catch all */}
          <Route path="*" element={<NotFound/>}/>
                   </Route>
              </Route>
        </Routes>)
            }
   </>)
 }



 export default   App;
