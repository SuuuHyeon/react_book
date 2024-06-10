import React, { useEffect, useState } from 'react'
import Member from '../../components/Member'
import axios from 'axios';

const MemberList = () => {


    const [members, setMembers] = useState([]);

    useEffect(() => {
        // console.log('memberList');
        axios.get('http://localhost:8080/api/memberList').then(res => {
            // console.log(res);
            console.log(res.data);
            setMembers(res.data);
        }).catch(err => {
            console.log("오류 발생!");
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>회원리스트 페이지</h1>
            {
                members.map((member) => <Member key={member.id} member={member} />)
            }
        </div>
    )
}

export default MemberList
