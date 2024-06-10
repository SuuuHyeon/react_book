import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Book from '../../components/Book';

const BookDetail = () => {
    const { id } = useParams();
    const [bookDetail, setBookDetail] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/bookDetail/${id}`)
            .then(res => {
                const bookData = res.data;
                const bookWithImageUrl = {
                    ...bookData,
                    thumbnailPhoto: `http://localhost:8080/api/image?imageName=${bookData.thumbnailPhoto}`
                };
                setBookDetail(bookWithImageUrl);
            })
            .catch(err => {
                console.log("오류 발생!");
                console.log(err);
            });
    }, [id]);

    if (!bookDetail) {
        return <div>로딩 중...</div>;
    }

    return (
        <div>
            <h1>책 상세 이미지</h1>
            {/* 북 컴포넌트 띄우기 */}
            <Book book={bookDetail} isList={false} />
        </div>
    );
}

export default BookDetail;
