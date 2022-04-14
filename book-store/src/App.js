import Header from "./components/Header";
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import AddBook from "./components/AddBook";
import About from "./components/About";
import {Fragment} from 'react'
import Books from './components/Book/Books'
import BookDetail from "./components/Book/BookDetail";
function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddBook />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
