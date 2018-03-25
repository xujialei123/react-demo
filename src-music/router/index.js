import App from '../javascripts/App'
import Home from '../javascripts/components/container/Home'
import Detail from '../javascripts/components/container/Detail'


const routeConfig = [
    { path: '/',
      component: App,
      indexRoute:{ component: Home },
      childRoutes: [
        { path: 'home', component: Home},
        { path: 'detail', component: Detail },
        {path:'*',component:Home}
      ]
    }
  ]

export default routeConfig