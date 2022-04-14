import { Button } from "@mui/material";
import "./Book.css"
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
const Book = (props) => {
    const history = useNavigate();
    const {_id,name,author,description,price,available,image} = props.book;
    const deleteHandler = async () => {
        await axios.delete('http://localhost:5000/books/'+_id)
        .then((res)=>res.data)
        .then(()=>history('/'))
        .then(()=>history('/books'))
    }
    return (
        <div className="card">
            <img src={image} alt={name} />
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>{price}</h3>
            <Button LinkComponent={Link} to={'/books/'+_id} sx={{mt:'auto'}}>Update</Button>
            <Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
        </div>
    )
}

export default Book;