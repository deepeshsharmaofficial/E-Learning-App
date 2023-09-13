import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {path: '', element: <Hero />},
        {
          path: '/courses',
          children: [
            {path: '', element: <Courses />},
            { path: ':courseId', element: <Details/>}
          ]
        },
        {
          path: '/learn/:courseId',
          element: <Learn/>,
          children: [
            {path: 'chapter/:chapterId', element: <Chapter />}
          ]
        }
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
