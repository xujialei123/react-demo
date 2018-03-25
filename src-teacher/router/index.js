import App from '../javascripts/App'
import Home from '../javascripts/components/container/Home'
import Detail from '../javascripts/components/container/Detail'
import Temp from '../javascripts/components/container/Temp/Temp'
import Car from '../javascripts/components/container/Car'
import Mine from '../javascripts/components/container/Mine'
import Login from '../javascripts/components/container/Login'

import store from '../store'
import {hashHistory} from 'react-router'

const routeConfig = [
    { path: '/',
      component: App,
      indexRoute:{ component: Home },
      childRoutes: [
        { path: 'home', component: Home,onEnter:()=>{
            console.log('enter home')
        },onLeave:()=>{
            console.log('leave home')
        } },
        { path: 'detail/:id', component: Detail },
        { path: 'temp', component: Temp },
        { path: 'car', component: Car },
        { path: 'mine', component: Mine,onEnter:()=>{
          //判断登陆没有，没有登陆的话，就去login
            if(!store.getState().userInfo.username){
              setTimeout(() => {
                hashHistory.replace({pathname:'/login'})
              }, 0);
              
            }
            

        } },
        { path: 'login', component: Login },
        {path:'*',component:Home}
      ]
    }
  ]

export default routeConfig