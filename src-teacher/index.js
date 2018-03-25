import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';


// swiper
import 'swiper/dist/css/swiper.min.css'

//antd-mobile
import 'antd-mobile/dist/antd-mobile.css'; 

import {Router,hashHistory} from 'react-router'

// import Home from './javascripts/components/container/Home'
// import Detail from './javascripts/components/container/Detail'

// ReactDOM.render(
// <Router history={hashHistory}>
//     <Route path="/" component={App}>
//         {/* <IndexRoute component={Home}/> */}
//         <IndexRedirect to="/home"/>
//         <Route path="/home" component={Home}></Route>
//         <Route path="/detail/:id" component={Detail}></Route>

//         <Redirect from="*" to="/home" />
//     </Route>
// </Router>
// , document.getElementById('root'));

import {Provider} from 'react-redux'
import store from './store'


import routeConfig from './router'
ReactDOM.render(
    <Provider store={store}>
    <Router routes={routeConfig} history={hashHistory}></Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();





//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG





