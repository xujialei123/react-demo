import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';




//antd-mobile
// import 'antd-mobile/dist/antd-mobile.css'; 

import {Router,hashHistory} from 'react-router'




import routeConfig from './router'
ReactDOM.render(
    
    <Router routes={routeConfig} history={hashHistory}></Router>

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





