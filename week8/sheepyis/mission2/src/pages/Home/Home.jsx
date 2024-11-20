import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "../../api/todo";
import Add from "../../components/Home/Add/Add";
import Search from "../../components/Home/Search/Search";
import ListTodo from "../../components/Home/Todo/list-todo";
import Loading from "../../components/Home/Loading/Loading";

const Home = () => {
    const [title, setTitle] = useState("");

    const onSearch = (searchQuery) => {
        setTitle(searchQuery);
    };

    const { data: todos, isPending } = useQuery({
        queryFn: () => getTodoList({ title }),
        queryKey: ["todos", title],
    });

    return (
        <div className="pageContainer">
            <Add title={title} setTitle={setTitle} />
            <Search search={title} setSearch={setTitle} onSearch={onSearch} />
            {isPending ? <Loading /> : <ListTodo data={todos} />}
        </div>
    );
}

export default Home;
