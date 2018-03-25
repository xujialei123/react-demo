 import App from '../javascript/App'
 import Home from '../javascript/container/home'
 import Detail from '../javascript/container/detail'
 import Temp from'../javascript/container/temp/temp'


 let routeConfig=[
     {
         path:'/',
         component:App,
         indexRoute:{component:Home},
         childRoutes:[
             {path:'home',component:Home,onEnter:()=>{
                 console.log('enterHome')
             },onLeave:()=>{
                 console.log('leavehome')
             }},
             {path:'detail/:id',component:Detail},
            {path:'/temp',component:Temp},
             {path:'*',component:Home}
         ]
     }
 ]
 export default routeConfig