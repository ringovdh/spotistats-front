import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from "./components/root/Root";
import Home from "./components/home/Home";

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
          ]
        },
  ]);

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
