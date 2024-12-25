import { HomePage } from "@/pages"
import { FC } from "react"
import { Route, Routes } from "react-router"
import { routesData } from "./routesData"

const AppRoutes:FC = () => {
  return (
    <>
    <Routes>
        {
            routesData?.map((route, index) => (
          <Route key={index} path={route.route} element={<HomePage />} />
            ))
        }
        {/* Temporary fail safe to reroute any route to /home */}
        <Route path="*" element={<HomePage />} />
        {/* Permanent solution: Create a NotFoundPage component and use it here */}
    </Routes>
    </>
  )
}

export default AppRoutes