import styled from "styled-components";
import LoadingComp from "./states/loading";
import ErrorComp from "./states/error";
import { useParams } from "react-router-dom"; // 필요한 훅 가져오기
import useDetailFetch from "../hooks/useCustomDetails";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
    const { id } = useParams();
    const apiUrl = `http://localhost:3000/todo/${id}`;
    // console.log("API URL 확인:", apiUrl); // URL 확인
    const { data: todo, loading, error } = useDetailFetch(apiUrl);
    
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
    const [title, setTitle] = useState(""); // 제목 상태
    const [content, setContent] = useState(""); // 내용 상태
    useEffect(() => {
        if (todo) {
            setTitle(todo.title || ""); // 초기 제목 설정
            setContent(todo.content || ""); // 초기 내용 설정
        }
    }, [todo]);

    const handleEditToggle = () => {
        if (isEditing) {
            // 저장 로직 실행
            saveChanges();
        } else {
            setIsEditing(true); // 수정 모드 활성화
        }
    };

    const saveChanges = async () => {
        try {
            // 수정할 데이터만 전송
            const updatedData = {};
            if (title.trim() !== todo.title) {
                updatedData.title = title.trim(); // 제목이 변경되었을 경우만 추가
            }
            if (content.trim() !== todo.content) {
                updatedData.content = content.trim(); // 내용이 변경되었을 경우만 추가
            }
            updatedData.checked = todo.checked; // 체크 상태는 유지
            
            const response = await axios.patch(apiUrl, updatedData); // PATCH 메서드 사용
            alert("수정이 완료되었습니다.");
            console.log("수정된 데이터:", response.data);
            setIsEditing(false); // 수정 모드 비활성화
        } catch (error) {
            console.error("수정 실패:", error.response || error.message);
            alert("수정 중 오류가 발생했습니다: " + (error.response?.data?.message || error.message));
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(apiUrl); // DELETE 요청
            alert("삭제가 완료되었습니다.");
            console.log(`Todo ID: ${id}가 삭제되었습니다.`);
            
            window.location.href = "/todo"; // 또는 useNavigate()로 구현 가능
        } catch (error) {
            console.error("삭제 실패:", error.response || error.message);
            alert("삭제 중 오류가 발생했습니다: " + (error.response?.data?.message || error.message));
        }
    };
    
    if (loading) return <LoadingComp />
    if (error) return <ErrorComp />
    if (!todo) {
        return <ErrorComp />
    }

    console.log("가져온 데이터:", todo);

    return(
        <Wrapp>
            <span className="logo">⚡ UMC ToDoList ⚡</span>
            {/* 체크 상태에 따라 버튼 표시 */}
            <Button>{todo.checked ? "완료됨" : "완료"}</Button>
            
            <Input 
            placeholder="제목" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            readOnly={!isEditing} // 수정 모드일 때만 입력 가능
            />
            <InputCont
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                readOnly={!isEditing} // 수정 모드일 때만 입력 가능
            />
            {/* 하단 버튼 */}
            <ButonWrapp>
                <UnderButton onClick={handleEditToggle} >{isEditing ? "수정완료" : "수정하기"}</UnderButton>
                <UnderButton onClick={handleDelete}>삭제하기</UnderButton>
            </ButonWrapp>
        </Wrapp>
    )
}

const Wrapp = styled.main`
display:flex;
flex-direction:column;
gap:10px;
`

const UnderButton = styled.button`
width: 340px;
height: 60px;


background: #C0C3D8;
border-radius: 10px;
color:white;

`

const ButonWrapp = styled.article`
display:flex;
gap:30px;
`

const Input = styled.input `

width: 704px;
height: 60px;
background: #FFFFFF;
border: 2px solid #A19D9D;
border-radius: 10px;
`
const InputCont = styled(Input)`
height: 502px;
`

const Button = styled.button `

width: 120px;
height: 40px;
background: #C0C3D8;
border-radius: 50px;

color: #000000;


`
export default Details;