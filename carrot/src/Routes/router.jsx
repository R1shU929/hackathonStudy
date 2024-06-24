import Stores from "../pages/stores/stores";
import Header from "../components/Header";
import Market from '../pages/market/market'
import EventPage from "../pages/event/eventpage";
import Home from "../pages/home/home";
import Member from "../pages/member/member";
import Api from "../pages/api";


const router = ([
        {
            path:'/',
            element: <Header/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/fleamarket',
                    element:<Market/>
                },

                {
                    path:'/nearby-stores',
                    element:<Stores/>
                }
                ,
                {
                    path:'/event',
                    element:<EventPage/>
                }
                ,
                {
                    path:'/member',
                    element:<Member/>
                },
                {
                    path:'/api',
                    element:<Api/>
                }
            ]
        }
        
    ])
export default router;