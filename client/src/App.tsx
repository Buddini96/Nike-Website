import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {Register} from "./view/pages/Register/Register";
import {UserDashboard} from "./view/admin/userDashboard";

function App() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
      /*<h1 className="text-7xl font-bold underline">
        Hello world!
      </h1>*/

      <BrowserRouter>
          {/*<div style={{backgroundColor: "red",*/}
          {/*    padding: 10, textAlign: "center"}}>*/}
          {/*    Inline Css Box</div>*/}
          {/*<br/>*/}

          {/*<div className="box">External css file</div>*/}
          {/*<br/>*/}
          {/*<div className= "bg-yellow-400 p-10 text-center">Tailwind CSS Utility class Box</div>*/}

          {/*<h1 className={"text-center text-teal-800 text-6xl"}>This is App.tsx</h1>*/}

          {/*-------------Before default layout--------------*/}
          {/*<Navbar></Navbar>*/}
          {/*<MainContent></MainContent>*/}
          {/*<Footer/>*/}

          {/*-------------After default layout--------------*/}
          {/*<DefaultLayout/>*/}
          {/*<Login/>*/}

          <Routes>

            {/*<Route path={"/*"} Component={DefaultLayout}></Route>*/}
              <Route path={"/*"} element={isLoggedIn =="true" ? <UserDashboard/> : <DefaultLayout/>}></Route>
              <Route path={"/login"} Component={Login}></Route>
              <Route path={"/Register"} Component={Register}></Route>
              <Route path={"/userDashboard"} Component={UserDashboard}></Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
