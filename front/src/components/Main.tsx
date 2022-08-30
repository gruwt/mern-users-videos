import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "bootswatch/dist/pulse/bootstrap.min.css";
import "../index.css";

import VideoList from "./Videos/VideoList";
import VideoForm from "./Videos/VideoForm";
import App from "./THREE/App";
import Navbar from './Navbar/Navbar';
import Game from "./THREE/gaming/Game";

import { UtilsContextProvider } from "./THREE/context/Context";


const Main = () => {
  return (
    <React.StrictMode>
      // TODO a partir de las v6 en reat-router-dom , hay que usar Routes en vez
      // TODO de Swithc, hay que cambiar component={} a element={}
      <BrowserRouter>
        <Navbar />

        <div className="container p-4">
          <Switch>
            <Route exact path={["/", "/videos"]} component={VideoList} />
            <Route path="/new-video" component={VideoForm} />
            <Route path="/update/:id" component={VideoForm} />
            <Route path="/three" component={App} />
            <UtilsContextProvider>
              <Route path="/plane" component={Game} />
            </UtilsContextProvider>
          </Switch>
          {/* <ToastContainer /> */}
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Main