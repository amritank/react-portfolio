import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/resume',
          element: <Resume />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App