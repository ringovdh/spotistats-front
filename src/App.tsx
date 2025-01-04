import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from "./components/root/Root";
import Home from "./components/home/Home";
import LoadData from "./components/load-data/Load-data";

function App() {
  const router = createBrowserRouter([
        {
          path: '/',
          element: <RootLayout/>,
          children: [
              {
                  index: true,
                  element: <Home/>
              },
              {
                  path: '/load-data',
                  element: <LoadData/>
              },
          ]
        },
  ]);

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
