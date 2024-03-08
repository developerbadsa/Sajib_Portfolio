import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout></Layout>,
  children: [
   {
    path: '/',
    element: 'home'
   },
   {
    path: '/portfolio',
    element: 'portfolio'
   }
  ]
 }
])

export default router;