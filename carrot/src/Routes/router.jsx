import Stores from "../pages/stores/stores";
import Header from "../components/Header";
import Market from '../pages/market/market'


const router = ([
        {
            path:'/',
            element: <Header/>,
            children:[
                {
                    path:'/',
                    element:<Market/>
                },
                {
                    path:'/nearby-stores',
                    element:<Stores/>
                }
            ]
        }
        
    ])

export default router;