import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetail = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/memberDetail/${id}`)
            .then(res => {
                setMember(res.data);
            })
            .catch(err => {
                console.log("오류 발생!");
                console.log(err);
            });
    }, [id]);

    if (!member) {
        return <div>유효하지 않음</div>
    }

    return (
        <div>
            <h1>회원 상세 정보</h1>
            <p>ID: {member.id}</p>
            <p>이름: {member.name}</p>
            <p>이메일: {member.email}</p>
            <p>나이: {member.age}</p>
            <p>전화번호: {member.phone}</p>
            
            
        </div>
    );
};

export default MemberDetail;
