import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./listitems";
import { useNavigate } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import ErrorComp from "./states/error";
import LoadingComp from "./states/loading";


const Todobanner = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todos, setTodos] = useState([]); // 리스트 상태
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [tempSearchTitle, setTempSearchTitle] = useState("");
    const [searchTitle, setSearchTitle] = useState(""); // 검색할 제목
    const isButtonDisabled = !title || !content;
    const navigate = useNavigate();

    // Custom Fetch Hook 사용
    const { data: initialTodos, loading, error, refetch } = useCustomFetch(
        "http://localhost:3000/todo",
        { params: { title: searchTitle } }
    );

   // 전체 todo
    useEffect(() => {
    if (initialTodos) {
        setTodos(initialTodos); // useCustomFetch로 가져온 데이터를 로컬 상태로 복사
    }
}, [initialTodos]);


// useEffect(() => {
//     const timeout = setTimeout(() => {
//         if (tempSearchTitle.trim() !== "") {
//             setSearchTitle(tempSearchTitle); // 1초 후 검색어 업데이트
//         }
//     }, 500); // 500ms 디바운스

//     return () => clearTimeout(timeout); // 이전 타이머 정리
// }, [tempSearchTitle]);

    // const fetchTodos = async (titleQuery = "") => {
    //     try {
    //         const response = await axios.get("http://localhost:3000/todo", {
    //             params: { title: titleQuery },
    //         });
    //         setTodos(response.data[0]); // 첫 번째 배열에 리스트 데이터가 있음
    //         console.log("Todo 데이터 로드 성공:", response.data[0]);
    //     } catch (error) {
    //         console.error("Todo 데이터 로드 실패:", error);
    //     }
    // };

    // const handleSearch = () => {
    //     setSearchTitle(tempSearchTitle); // 검색어 상태 업데이트
    //     // refetch(); // API 요청 실행
    // };

    const handleSearch = async () => {
        const trimmedTitle = tempSearchTitle.trim();
        setSearchTitle(trimmedTitle); // 검색 상태 업데이트
        try {
            const response = await axios.get("http://localhost:3000/todo", {
                params: { title: trimmedTitle },
            });
            setTodos(response.data); // 검색 결과 업데이트
        } catch (error) {
            console.error("검색 실패:", error);
            alert("검색에 실패했습니다.");
        }
    };


    // useEffect(() => {
    //     if (searchTitle.trim() !== "") {
            
    //     }
    // }, [searchTitle]);

    const toggleChecked = async (id) => {
        const todo = todos.find((t) => t.id === id);
        if (!todo) return;
    
        const updatedChecked = !todo.checked;
    
        // 서버와 동기화
        try {
            await axios.patch(`http://localhost:3000/todo/${id}`, { checked: updatedChecked });
            // 로컬 상태 즉시 반영
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, checked: updatedChecked } : todo
                )
            );
        } catch (error) {
            console.error(`Todo ID ${id} 체크 상태 변경 실패:`, error);
            alert("체크 상태 변경에 실패했습니다.");
        }
    };

        const createTodo = async () => {
            if (isButtonDisabled) return;
        
            try {
                const response = await axios.post("http://localhost:3000/todo", {
                    title,
                    content,
                });
        
                alert("ToDo가 성공적으로 생성되었습니다!");
                setTodos([...todos, response.data]);
                // 입력 필드 초기화
                setTitle("");
                setContent("");
        
                // 데이터 재로딩
            } catch (error) {
                console.error("ToDo 생성 실패:", error);
                alert("ToDo 생성에 실패했습니다.");
            }
        };
    

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`); // DELETE 요청
            alert(`Todo ID ${id} 삭제 성공`);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(`Todo ID ${id} 삭제 실패:`, error);
            alert("Todo 삭제에 실패했습니다.");
        }
    };

    const updateTodo = async (id, updatedData) => {
        try {
            const response = await axios.patch(`http://localhost:3000/todo/${id}`, updatedData);
            alert(`Todo ID ${id} 수정 성공`);
            // 서버에서 반환된 데이터로 상태 업데이트
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, ...updatedData } : todo
                )
            );
        } catch (error) {
            console.error(`Todo ID ${id} 수정 실패:`, error);
            alert("Todo 수정에 실패했습니다.");
        }
    };

    if (loading) return <LoadingComp />;
    if (error) return <ErrorComp />;

    

    return (
        <Wrapp>
            <span className="logo" onClick={() => navigate("/")} >⚡ UMC ToDoList ⚡</span>
            
            <Input placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <MakeButton 
            onClick={createTodo} disabled={isButtonDisabled}
            isButtonDisabled={isButtonDisabled}
            >ToDo 생성</MakeButton>

            <SearchButton onClick={handleSearch}>
                검색
            </SearchButton>

            <Input
    placeholder="제목으로 검색해보세요."
    value={tempSearchTitle} // 검색어 입력 상태를 tempSearchTitle로 설정
    onChange={(e) => setTempSearchTitle(e.target.value)} // 검색어 입력 상태 업데이트
/>

            {/* 리스트 렌더링 */}
            <TodoList>
                {todos.map((todo, index) => (
                    <ListItem
                        key={index}
                        id={todo.id}
                        title={todo.title}
                        content={todo.content}
                        checked={todo.checked}
                        
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        toggleChecked={toggleChecked}
                    />
                ))}
            </TodoList>

        </Wrapp>
    )
}



const TodoList = styled.div`
margin-top: 20px;

`;


const SearchButton = styled.button`
width: 120px;
height: 40px;

background: #C0C3D8;
border-radius: 50px;

font-size: 18px;


color: #000000;



`

const MakeButton = styled.button`
width: 704px;
height: 60px;
left: 608px;
top: 383px;

background: ${(props) => (props.isButtonDisabled ? "#EDEDED" : "#C0C3D8")};
border-radius: 10px;
/* 내용을 입력해주세요 */

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
margin-top:20px;
margin-bottom:20px;


text-align: center;

color: ${(props) => (props.isButtonDisabled ? "#A19D9D" : "#FFFFFF")};



`

const Input = styled.input`
/* titleInput */

box-sizing: border-box;

width: 704px;
height: 60px;

background: #FFFFFF;
border: 2px solid #A19D9D;
border-radius: 10px;
margin-bottom:20px;
margin-top:10px;

`


const Wrapp = styled.main`
display:flex;
flex-direction:column;
`

export default Todobanner;