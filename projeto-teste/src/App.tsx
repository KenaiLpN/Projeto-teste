import { Routes,Route } from "react-router-dom"
import { NavBar } from "./components/navbar/navbar"
import DashboardPage from "./pages/dashboard/page"
import FavoritesPage from "../../Curso HTML e CSS/ProjetoHatock/favorites/page"
import InboxPage from "./pages/inbox/page"
import TopBar from "./components/topbar/topbar"
import { ProductsPage } from "./pages/products/page"
import { OrderListsPage } from "./pages/orderlists/page"
import { PricingPage } from "./pages/pricing/page"
import { CalenderPage } from "./pages/calender/page"
import { ToDoPage } from "./pages/todo/page"
import { ContactPage } from "./pages/contact/page"
import { InvoicePage } from "./pages/invoice/page"
import { UiElementsPage } from "./pages/uielements/page"
import { TeamPage } from "./pages/team/page"
import { TablePage } from "./pages/table/page"
import { SettingsPage } from "./pages/settings/page"
import { ProductStockPage } from "./pages/productstock/page"

function App() {


  return (
<div>
<TopBar/>

<div className="flex w-screen h-screen">
<aside className="">
    <NavBar/>
  </aside>
<main className="bg-[#F0F0F4] ml-10 mt-15 w-screen">
    <Routes>
       <Route path="/src/pages/dashboard" element={<DashboardPage/>}/>
       <Route path="/src/pages/products" element={<ProductsPage/>}/>
       <Route path="/src/pages/favorites" element={<FavoritesPage/>}/>
       <Route path="/src/pages/inbox" element={<InboxPage/>}/>
       <Route path="/src/pages/orderlists" element={<OrderListsPage/>}/>
       <Route path="/src/pages/productstock" element={<ProductStockPage/>}/>
       <Route path="/src/pages/pricing" element={<PricingPage/>}/>
       <Route path="/src/pages/calender" element={<CalenderPage/>}/>
       <Route path="/src/pages/todo" element={<ToDoPage/>}/>
       <Route path="/src/pages/contact" element={<ContactPage/>}/>
       <Route path="/src/pages/invoice" element={<InvoicePage/>}/>
       <Route path="/src/pages/uielements" element={<UiElementsPage/>}/>
       <Route path="/src/pages/team" element={<TeamPage/>}/>
       <Route path="/src/pages/table" element={<TablePage/>}/>
       <Route path="/src/pages/settings" element={<SettingsPage/>}/>
       
    </Routes>
</main>
</div>
</div>
 

  
  )}

export default App
  // //     <div>
  //  <Routes>
  //  <Route path="/navbar" element={<Navbar/>}/>
  //     <Route path="/productlist" element={<ProductList/>}/>
  //   </Routes>
  //   <ProductList/>
  //   <Navbar>

  //   </Navbar>
  // </div>