import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import { Router, Route, browserHistory} from 'react-router'
// import './index.css';
import App from './containers/App';
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker';


let store = createStore(todoApp);
let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);
registerServiceWorker();

/**
 * (<Router history={browserHistory}>
      <Route path="/" component={App}>
       <Route path="/about" component={About} />
       <Route path="/inbox" component={Inbox}>
           <Route path="/messages/:id" component={Message} />
         <Route path="/messages" component={Message} />        
       </Route>
     </Route>
 </Router>),
*/
