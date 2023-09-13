import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {path: '', element: <Hero />},
        {path: '/courses', element: <Courses />}
      ],

    },
  ]);
  
  return (
    <div className="App">
      <>
        <RouterProvider router={router} />    
      </>
    </div>
  );
}

export default App;
