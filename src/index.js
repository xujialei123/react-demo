import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,hashHistory} from 'react-router'
import store from './store'
import {Provider} from 'react-redux'

import routeConfig from './router'
import 'swiper/dist/css/swiper.min.css'
// ReactDOM.render(<Router history={hashHistory}>
//                 <Route path='/' component={App}>
//                     <IndexRoute component={Home}/>
//                     <IndexRedirect to='/home'/>
//                     <Route path='/home' component={Home}></Route>
//                     <Route path='/detail/:id' component={Detail}></Route>
//                     {/* <Redirect from='*' to='/home'/>  */}
//                 </Route>
               
//             </Router>
// , document.getElementById('root'));
ReactDOM.render(
<Provider store = {store}>
<Router routes={routeConfig} history={hashHistory}></Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
