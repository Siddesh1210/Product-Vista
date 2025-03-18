import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import SideBarComponent from './components/SideBarComponent';

const ProductPage = lazy(() => import('./views/ProductPage'));
const CompareProductsPage = lazy(() => import('./views/CompareProductsPage'));

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBarComponent/>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: (
            <Suspense><ProductPage /></Suspense>
        )
      },
      {
        path: "/compare-products",
        element: (
            <Suspense><CompareProductsPage /></Suspense>
        )
      }
    ]
  },
]);
