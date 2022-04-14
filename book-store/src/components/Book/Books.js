
import {useState,useEffect} from 'react'
import Book from './Book'
import axios from 'axios'
import './Book.css'
const URL = "http://localhost:5000/books"
const fetchHandler = async () => {
    return await axios.get(URL).then((res)=> (res.data))
    .catch((err)=>{console.log(err)})
}
const Books = () => {
    // return <Book />
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetchHandler().then(data=>setBooks(data.books))
    },[]);
    console.log(books)
    return (
        <div>
            <ul>
            {books &&
                books.map((book,i) => (
                <li className='book' key={i}>
                    <Book book={book} />
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Books;

// https://youtu.be/5Y5QKfxTErU?t=5197