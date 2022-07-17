import {Navigate, useRoutes} from 'react-router-dom'

import BlankLayout from 'layouts/BlankLayout'
import DashboardLayout from 'layouts/dashboard/DashboardLayout'

import Page404 from 'pages/Page404'
import DashboardApp from 'pages/dashboard/DashboardApp'
import Users from 'pages/Users'
import Coordinator from 'pages/Coordinator'
import Delivery from 'pages/Delivery'
import Statistic from 'pages/Statistic'

//------------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout/>,
      children: [
          { path: 'app', element: <DashboardApp /> },
          { path: 'users', element: <Users /> },
          { path: 'coordinator', element: <Coordinator /> },
          { path: 'delivery', element: <Delivery /> },
          { path: 'statistic', element: <Statistic /> }
      ]
    },
    {
        path: '/',
        element: <BlankLayout/>,
        children: [
            {path: '/', element: <Navigate to="dashboard/app"/>},
            {path: '404', element: <Page404/>},
            {path: '*', element: <Navigate to="/404"/>},
        ]
    }
  ]);
}
