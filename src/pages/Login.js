import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigator = useNavigate();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const inputId = (e) => {
        setId(e.target.value);
    }

    const inputPw = (e) => {
        setPw(e.target.value);
    }

    const onClickLogin = () => {
        console.log('id:', id, 'pw:', pw);

        axios.post('http://localhost:8080/api/login', {
            email: id,
            password: pw
        }).then(res => {
            console.log(res.data);
            if (res.data === true) {
                console.log('로그인 성공');
                // 페이지 이동
                navigator('/memberList');
            } else {
                console.log('로그인 실패');
            }

        }).catch(err => {
            console.log(err);
        }
        )
    }

    return (
        <div>
            <Container style={{ width: '60%' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력하세요." onChange={inputId} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>패스워드</Form.Label>
                        <Form.Control type="password" placeholder="패스워드를 입력하세요." onChange={inputPw} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={onClickLogin}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login
