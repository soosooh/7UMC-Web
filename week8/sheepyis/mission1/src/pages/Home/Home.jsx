import { useEffect, useState } from "react";
import Add from "../../components/Home/Add/Add";
import Search from "../../components/Home/Search/Search";
import ListTodo from "../../components/Home/Todo/list-todo";
import useApi from "../../hooks/useApi";

const Home = () => {
    const { data, error, loading, get } = useApi();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        get("/");
    }, []);

    useEffect(() => {
        if (Array.isArray(data[0])) {
            setFilteredData(data[0]);
        }
    }, [data]);

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            get(`/?title=${searchTerm}`);
        } else {
            get("/");
        }
    };

    return (
        <div className="pageContainer">
            <Add />
            <Search onSearch={handleSearch} />
            <ListTodo data={filteredData} />
        </div>
    );
};

export default Home;
