import Home from "../pages/Home";
import Detail from "../pages/Detail";

    const router = ( [
        {
            path: '/',
            element:<Home/>
        }
        ,
       {
        path: '/Detail',
        element: <Detail/>
    }
    ,
    {
        path: '/Charlotte',
        element: <Detail/>
    }
    ])

export default router;