import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import router from './Routes/router';

function App() {
  const RouterObject = createBrowserRouter(router);
  // 세상밖에 나오게 라우터오브젝트로 만들어줌
  return (
    <div>
        <RouterProvider router={RouterObject}/> 
    </div>
  );
}

export default App;


const Wrapper = styled.div`
font-size: 50px;
color: #ff8297;
height: 50vh;
background-color: beige;
display: flex;
align-items: center;
justify-content: center;
`;
