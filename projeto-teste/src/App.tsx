import { Routes,Route } from "react-router-dom"
import { NavBar } from "./components/navbar/navbar"
import DashboardPage from "./pages/dashboard/page"
import FavoritesPage from "./pages/favorites/page"
import InboxPage from "./pages/inbox/page"
import TopBar from "./components/topbar/topbar"

function App() {


  return (
<div>
<TopBar/>

<div className="flex w-screen h-screen">
<aside>
    <NavBar/>
  </aside>
<main className="bg-[#F0F0F4] ml-10 mt-15 w-screen">
    <Routes>
       <Route path="/src/pages/dashboard" element={<DashboardPage/>}/>
       <Route path="/src/pages/favorites" element={<FavoritesPage/>}/>
       <Route path="/src/pages/inbox" element={<InboxPage/>}/>
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