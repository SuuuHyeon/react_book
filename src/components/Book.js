// Book.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Book.css';

const Book = (props) => {
    const { id, title, author, publisher, price, created_at } = props.book;

    return (
        <Card className="book-card">  {/* Apply the custom class */}
            <Card.Body>
                <Card.Title className="book-title">책 제목: {title}</Card.Title>
                <Card.Text>저자: {author}</Card.Text>
                <Card.Text>출판사: {publisher}</Card.Text>
                <Card.Text>출판일: {new Date(created_at).toLocaleDateString()}</Card.Text>
                <Card.Text>가격: {price} 원</Card.Text>
                <Link to={`/bookDetail/${id}`} className="book-detail">상세보기</Link>
            </Card.Body>
        </Card>
    );
}

export default Book;
