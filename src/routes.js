import React  from 'react';
// import {Route, Router, IndexRoute,browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
// import createBrowserHistory from 'history/createBrowserHistory'
// const history = createBrowserHistory()

class Routes extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Route component={App}/>
                </Router>
            </div>
        )}
}
export default Routes