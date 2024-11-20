import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./listitems";
import { useNavigate } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import ErrorComp from "./states/error";
import LoadingComp from "./states/loading";


import { useQuery, useMutation,  useQueryClient } from '@tanstack/react-query';


const fetchTodos = async ({ queryKey }) => {
    const [_key, { title }] = queryKey; // queryKey로부터 title 분리
    const response = await axios.get('http://localhost:3000/todo', {
        params: { title },
    });
    console.log("서버에서 가져온 데이터:", response.data);
    return response.data[0]; // 응답 데이터 반환
};

const Todobanner = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    //const [todos, setTodos] = useState([]); // 리스트 상태
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [tempSearchTitle, setTempSearchTitle] = useState("");
    const [searchTitle, setSearchTitle] = useState(""); // 검색할 제목
    const isButtonDisabled = !title || !content;
    const navigate = useNavigate();


    const queryClient = useQueryClient();
    const {
        data: todos = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ['todos', { title: tempSearchTitle.trim() }], // 항상 검색 상태 기반으로 작동
        queryFn: fetchTodos,
        onSuccess: (data) => {
            console.log('Todos 로드 성공:', data); // 데이터 로드 성공 로그
        },
        onError: (error) => {
            console.error('Todos 로드 실패:', error);
        },
        enabled: true, // 기본적으로 데이터를 가져오도록 설정
    });


    if (isLoading) return <LoadingComp />;
    if (isError) return <ErrorComp />;


    // const handleSearch = async () => {
    //     const trimmedTitle = tempSearchTitle.trim();
    //     setSearchTitle(trimmedTitle); // 검색 상태 업데이트
    //     try {
    //         const response = await axios.get("http://localhost:3000/todo", {
    //             params: { title: trimmedTitle },
    //         });
    //         setTodos(response.data); // 검색 결과 업데이트
    //     } catch (error) {
    //         console.error("검색 실패:", error);
    //         alert("검색에 실패했습니다.");
    //     }
    // };

    const handleSearch = () => {
        refetch({ queryKey: ['todos', { title: tempSearchTitle.trim() }] }); // Manually fetch data when search is triggered
    };



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


    //useMutation 
    const createmutation = useMutation({
        mutationFn: async (data) => {
            try {
                const response = await axios.post("http://localhost:3000/todo", data);
                return response.data; // Axios는 이미 JSON 형태로 반환
            } catch (error) {
                console.error("ToDo 생성 실패:", error);
                alert("ToDo 생성에 실패했습니다.");
                throw error; // React Query가 에러를 인식하도록 던짐
            }
        },
        onSuccess: (data) => {
            alert("ToDo가 성공적으로 생성되었습니다!");
            queryClient.setQueryData(['todos'], (oldTodos = []) => [...oldTodos, data]);
        },
        onError: (error) => {
            console.error("Mutation 에러 발생:", error);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            try {
                const response = await axios.delete(`http://localhost:3000/todo/${id}`);
                return response.data; // 서버에서 반환된 데이터 (필요 시)
            } catch (error) {
                console.error(`Todo ID ${id} 삭제 실패:`, error);
                alert("Todo 삭제에 실패했습니다.");
                throw error; // React Query가 에러를 감지하도록 예외 던짐
            }
        },
        onSuccess: (_, id) => {
            alert(`Todo ID ${id} 삭제 성공`);
            // 삭제된 항목을 캐시에서 제거
            queryClient.setQueryData(['todos'], (oldTodos = []) =>
                oldTodos.filter((todo) => todo.id !== id)
            );
        },
        onError: (error) => {
            console.error("삭제 Mutation 에러 발생:", error);
        },
    });
    
    const updateMutation = useMutation({
        mutationFn: async ({ id, updatedData }) => {
            try {
                const response = await axios.patch(`http://localhost:3000/todo/${id}`, updatedData);
                return { id, updatedData: response.data }; // ID와 업데이트된 데이터 반환
            } catch (error) {
                console.error(`Todo ID ${id} 수정 실패:`, error);
                alert("Todo 수정에 실패했습니다.");
                throw error; // React Query가 에러를 인식하도록 예외 던짐
            }
        },
        onSuccess: ({ id, updatedData }) => {
            alert(`Todo ID ${id} 수정 성공`);
            // 캐시 데이터를 업데이트하여 UI 동기화
            queryClient.setQueryData(['todos'], (oldTodos = []) =>
                oldTodos.map((todo) =>
                    todo.id === id ? { ...todo, ...updatedData } : todo
                )
            );
        },
        onError: (error) => {
            console.error("수정 Mutation 에러 발생:", error);
        },
    });
    

    // const updateTodo = async (id, updatedData) => {
    //     try {
    //         const response = await axios.patch(`http://localhost:3000/todo/${id}`, updatedData);
    //         alert(`Todo ID ${id} 수정 성공`);
    //         // 서버에서 반환된 데이터로 상태 업데이트
    //         setTodos((prevTodos) =>
    //             prevTodos.map((todo) =>
    //                 todo.id === id ? { ...todo, ...updatedData } : todo
    //             )
    //         );
    //     } catch (error) {
    //         console.error(`Todo ID ${id} 수정 실패:`, error);
    //         alert("Todo 수정에 실패했습니다.");
    //     }
        
    // };



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
                onClick={() => {
                    if (isButtonDisabled) return; // 버튼 비활성화 상태라면 실행하지 않음
                    createmutation.mutate({ title, content }); // mutation 호출
                    setTitle(''); // 입력 필드 초기화
                    setContent('');
                }}
                disabled={isButtonDisabled} // 버튼 활성/비활성 상태
                isButtonDisabled={isButtonDisabled}
            >ToDo 생성
            </MakeButton>

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
                    {todos.map((todo, index) => {
                        console.log("현재 todo 데이터:", todo);
                        return (
                            <ListItem
                                key={index}
                                id={todo.id}
                                title={todo.title}
                                content={todo.content}
                                checked={todo.checked}
                                deleteTodo={() => deleteMutation.mutate(todo.id)}
                                updateTodo={(updatedData) =>
                                    updateMutation.mutate({ id: todo.id, updatedData }) // Mutation 호출
                                }
                                toggleChecked={toggleChecked}
                            />
                        );
                    })}
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