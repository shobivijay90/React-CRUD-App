import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from "./components/ListUser";
import EditUser from './components/EditUser';
import AddUser from "./components/AddUser";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route index element={<AddUser/>}/>
            <Route path="user/list" element={<ListUser/>}/>
            <Route path='user/create' element={<AddUser/>}/>
            <Route path='user/list/user/:id/edit' element={<EditUser/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
