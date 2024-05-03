import './App.css';
import Watchpage from './components/Watchpage';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Content />
  },
  {
    path: "/watch",
    element: <Watchpage />
  }
])


function App() {
  return (
    <div className='h-[98vh] w-[100vw]'>
      <Header />
      <div className='flex flex-row h-[93%] justify-between'>
        <Sidebar />
        <RouterProvider router={appRouter} />
        {/* <Content /> */}
      </div>
    </div>
  );
}

export default App;
