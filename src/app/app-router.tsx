import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from './layout/layout';
import Page404 from "./page-404/page-404";
import Page500 from "./page-500/page-500";
import Page403 from "./page-403/page-403";


export const appRouter = createBrowserRouter(
  [
    {
      path: '',
      element: <AppLayout />,
      children: [
        {
          path: '/dashboard',
          element: 'DASHBOARD'
        },
        {
          path: '/menu-1',
          element: <Page403 />
        },
        {
          path: '/menu-2',
          element: 'TEST'
        }
      ]
    },
    {
      path: '500',
      element: <Page500 />
    },
    {
      path: '*',
      element: <Page404 />
    }
  ]
);
