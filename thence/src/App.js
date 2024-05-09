import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import About from './components/about';
// import FaContainer from './components/facontainer';
// import Questions from './components/faq';
import Body from './components/Body';
import Container from './components/MainContainer';
import Signup from './components/Signup';
import Final from './components/Final';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path: "/",
        element: <Container/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path:"/success",
        element:<Final/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter}>
        <Header/>
        <Body/>
      </RouterProvider>
    </>
  );
}

export default App;
