import React, {useEffect, useState} from "react";
import axios from "axios";

function Books(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://springdatastoresample-398023.uw.r.appspot.com/findAllBooks")
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}, {book.author}, {book.year}</li>
                ))}
            </ul>
        </div>
    )
}

export default Books;