import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { ROUTES } from "@/shared"
import { CatalogPage } from "@/pages/CatalogPage"
import { CartPage } from "@/pages/CartPage"
function App() {


  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path={ROUTES.MAIN} element={<CatalogPage/>}/>
        <Route path={ROUTES.CART} element={<CartPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
