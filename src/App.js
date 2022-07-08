import { Routes, Route, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing'
import HomeUser from './pages/HomeUser'
import BookDetail from './pages/BookDetail'
import BookDetailDownload from './pages/BookDetailDownload'
import Profile from './pages/Profile'
import BookList from './pages/BookList'
import Transactions from './pages/Transactions'
import AddBooks from './pages/AddBooks'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/user">
        <Route index element={<HomeUser />}></Route>
        <Route path="/user/book-detail" element={<BookDetail />}></Route>
        <Route path="/user/book-download" element={<BookDetailDownload />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
      </Route>
      <Route path="/admin">
        <Route index element={<Transactions />}></Route>
        <Route path="/admin/book-list" element={<BookList />}></Route>
        <Route path="/admin/add-book" element={<AddBooks />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
