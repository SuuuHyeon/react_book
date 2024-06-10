import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../../components/Book';
import '../../css/Book.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/bookList')
            .then(res => {
                const booksWithImageUrls = res.data.map(book => {
                    return {
                        ...book,
                        thumbnailPhoto: `http://localhost:8080/api/image?imageName=${book.thumbnailPhoto}`,
                        // detailPhoto: `http://localhost:8080/api/image?imageName=${book.detailPhoto}`
                    };
                });
                setBooks(booksWithImageUrls);
                console.log(booksWithImageUrls);
            })
            .catch(err => {
                console.log("오류 발생!");
                console.log(err);
            });
    }, []);

    return (
        <div className="book-list">
            <h1>책 목록 페이지</h1>
            {books.map((book) => <Book key={book.id} book={book} isList={true} />)}
        </div>
    );
}

export default BookList;
