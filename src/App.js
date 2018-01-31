import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Persons from './component/Persons';
import log4javascript from "log4javascript"

class App extends Component {
    componentDidMount() {
        debugger;
        //in debug mode replace line 4 with line 3.
        // window.myLogger = log4javascript.getDefaultLogger();
        window.myLogger = log4javascript.getLogger();
        var ajaxAppender = new log4javascript.AjaxAppender('/api/logger');
        ajaxAppender.setThreshold(log4javascript.Level.ERROR);
        ajaxAppender.setBatchSize(10); // send in batches of 10
        ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
        window.myLogger.addAppender(ajaxAppender);
        ajaxAppender.setTimed(true);
        ajaxAppender.setTimerInterval(10000);
        //report all user console errors
        window.onError = function(message, url, lineNumber) {
            debugger
            var errorMsg = "Console error- "+url+" : "+lineNumber + ": "+message;
            console.log('errorMsg',errorMsg);
            window.myLogger.error("test error message",errorMsg);
            return true;
        };
        window.myLogger.info("test info");
    }
  render() {

    return (
      <div className="App">
          {/*//<Route exact={true} path="/" component={Register}/>*/}
          {/*//<Route path="/dashboard" component={Dashboard}  />*/}
          <Route path="/data" component={Persons}/>
      </div>
    );
  }
}

export default App;
