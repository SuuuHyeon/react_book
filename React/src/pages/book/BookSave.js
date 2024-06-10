import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const BookSave = () => {
    const navigator = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [thumbnailPhoto, setThumbnailPhoto] = useState(null);

    const setInputTitle = (e) => setTitle(e.target.value);
    const setInputAuthor = (e) => setAuthor(e.target.value);
    const setInputPublisher = (e) => setPublisher(e.target.value);
    const setInputPrice = (e) => setPrice(e.target.value);
    const setInputCreatedAt = (e) => setCreatedAt(e.target.value);
    const setInputThumbnailPhoto = (e) => {
        setThumbnailPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const onClickSave = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('publisher', publisher);
        formData.append('price', price);
        formData.append('created_at', createdAt);
        formData.append('thumbnailPhoto', thumbnailPhoto);

        try {
            const response = await axios.post('http://localhost:8080/api/bookSave', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data; charset=UTF-8',
                },
            });
            console.log(response.data);
            console.log('책 등록 성공');
            navigator('/bookList');
        } catch (error) {
            console.log(formData.getAll('title'));
            console.log('책 등록 실패');
            console.error(error.response ? error.response.data.message : 'ㄴㅇㄹ');
        }
    }

    return (
        <div>
            <Container style={{ width: '60%' }}>
                <Form.Group className="mb-2" controlId="title">
                    <Form.Label>책 제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="책 제목을 입력하세요."
                        onChange={setInputTitle}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="author">
                    <Form.Label>저자</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="저자를 입력하세요."
                        onChange={setInputAuthor}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="publisher">
                    <Form.Label>출판사</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="출판사를 입력하세요."
                        onChange={setInputPublisher}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="price">
                    <Form.Label>가격</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="가격을 입력하세요."
                        onChange={setInputPrice}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="createdAt">
                    <Form.Label>출간일</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ex)2024-00-00"
                        onChange={setInputCreatedAt}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="thumbnailPhoto">
                    <Form.Label>책 이미지</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={setInputThumbnailPhoto}
                        required
                    />
                </Form.Group>
                <div className="mb-4"></div>
                <Button className="w-100" variant="primary" onClick={onClickSave}>
                    책 등록
                </Button>
            </Container>
        </div>
    );
};

export default BookSave;
