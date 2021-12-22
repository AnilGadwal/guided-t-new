import {Route, Routes} from "react-router-dom"

import Main from "./components/Main/Main" 
import Message from "./components/Message/Message";
import UserInfo from "./components/DisplayUserInfo/UserInfo";
import Header from "./components/Header/Header";

import settings from "../src/Images/settings.jpg";
import update from "../src/Images/update.jpg"
import app from "../src/Images/app.jpg"
import done from "../src/Images/done.jpg"
import restart from "../src/Images/restart.jpg"
import sorry from "../src/Images/sorry.jpg"

function App() {

  const instructions1 = [
    "Crashing", 
    "Won't open", 
    "won't respond", 
    "isn't working properly"
  ];

  const instructions2 = [
    "Open your phone's Settings app.", 
    "Near the bottom, tap System and then Advanced and then System update.", 
    "Depending on your phone, you might need to tap About phone or About tablet and then Software update", 
    "You'll find your update status. Follow any steps on the screen."
  ];

  const instructions3 = [
    "On your phone, open the Google Play Store app", 
    "Tap Menu bars arrowMy apps & games.", 
    "Apps with available updates are labeled Update", 
    "If an update is available, tap Update.",
    "If more updates are available, tap Update all."
  ];

  const instructions4 = [
    "On most phones, press your phone's Power button for about 30 seconds or until your phone restarts.", 
    "You might need to tap Restart", 
  ];

  const instructions5 = [
  ];
  
  return (
    <div className="App">
      <Header/>

     <Routes>

      <Route exact path="/" element={<Main 
       navlink1="/two" 
       navlink2="/failed1" 
       btname1="Yes" 
       btname2="No" 
       display1="" 
       display2=""
       display3="none"
       back=""
       heading="Fix an installed Android app that isn't working"
       heading2="Try the following steps if an app installed on your phone has any of these problems:"
       note=" Is your Android phone responding to actions?"
       list={instructions1}
       image={settings}/>} />

      <Route exact path="/two" element={<Main 
       navlink1="/three" 
       navlink2="" 
       btname1="Continue" 
       btname2="" 
       display1="" 
       display2="none"
       display3="none"
       back="/"
       heading="Check for Android updates"
       heading2=""
       note="Press Continue when your phone is updated"
       list={instructions2}
       image={update}/>} />

      <Route exact path="/three" element={<Main 
       navlink1="/four" 
       navlink2="/message" 
       btname1="Yes" 
       btname2="No" 
       display1="" 
       display2=""
       display3="none"
       back="/two"
       heading="Update the apps"
       heading2=""
       note="Were you able to update the app?"
       list={instructions3}
       image={app}/>} />

      <Route exact path="/four" element={<Main 
       navlink1="/" 
       navlink2="" 
       btname1="Repeat?" 
       btname2="" 
       display1="" 
       display2="none"
       display3="none"
       back="/three"
       heading=""
       heading2=""
       note=" Glad we were able to walk you through updating your app"
       list={instructions5}
       image={done}/>} />  

      <Route exact path="/failed1" element={<Main 
       navlink1="/" 
       navlink2="" 
       btname1="Continue" 
       btname2="" 
       display1="" 
       display2="none"
       display3="none"
       back="/"
       heading="Restart your phone"
       heading2="Important: Settings can vary by phone. For more info, contact your device manufacturer"
       note="Press Continue once you restart your phone"
       list={instructions4}
       image={restart}/>} /> 

      <Route exact path="/sorry" element={<Main 
       navlink1="/" 
       navlink2="" 
       btname1="Start over" 
       btname2="" 
       display1="" 
       display2="none"
       display3=""
       back="/"
       heading=""
       heading2=""
       note="Sorry for the inconvenience! At this stage, you should visit an Google store to get your issue resolved.
       You can find the location closest to you on the Google Store Locator"
       list={instructions5}
       image={sorry}/>} /> 

      <Route exact path="message" element={<Message/>} />

      <Route exact path="userInfo" element={<UserInfo/>} />

    </Routes>
    </div>
  );
}

export default App;
