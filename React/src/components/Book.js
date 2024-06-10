import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Book.css';

const Book = (props) => {
    const { id, title, author, publisher, price, created_at, thumbnailPhoto, detailPhoto } = props.book;
    const { isList } = props;
    return (
        isList === true ? (
            <Card className="book-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20 }}>
                <div className="book-info">
                    <Card.Body>
                        {/* <Card.Text>책 번호: {id}</Card.Text> */}
                        <Card.Title className="book-title">책 제목: {title}</Card.Title>
                        <Card.Text>저자: {author}</Card.Text>
                        <Card.Text>출판사: {publisher}</Card.Text>
                        <Card.Text>출판일: {new Date(created_at).toLocaleDateString()}</Card.Text>
                        <Card.Text>가격: {price} 원</Card.Text>
                    </Card.Body>
                </div>
                <div className="book-image" style={{}}>
                    <Card.Img className="book-thumbnail" src={thumbnailPhoto} style={{ width: '300px' }} />
                    <Link to={`/bookDetail/${id}`} className="book-detail">상세보기</Link>
                    {/* <Card.Img className="book-detail-photo" src={detailPhoto} alt="Detail" /> */}
                </div>
            </Card>) : (
            <Card className="book-card" style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20 }}>
                <div className="book-image" style={{}}>
                    <Card.Img className="book-thumbnail" src={thumbnailPhoto} style={{ width: '500px' }} />
                    <Link to={`/bookList`} className="book-detail">책 목록으로</Link>
                </div>
            </Card>
        )
    );
}

export default Book;
