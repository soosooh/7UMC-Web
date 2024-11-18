import { useEffect, useState } from "react";
import Add from "../../components/Home/Add/Add";
import Search from "../../components/Home/Search/Search";
import ListTodo from "../../components/Home/Todo/list-todo";
import useApi from "../../hooks/useApi";
import Loading from "../../components/Home/Loading/Loading";
import Error from "../../components/Home/Error/Error";

const Home = () => {
    const { data, error, loading, get } = useApi();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        get("/");
    }, []);

    useEffect(() => {
        if (Array.isArray(data) && Array.isArray(data[0])) {
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

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <div className="pageContainer">
            <Add />
            <Search onSearch={handleSearch} />
            <ListTodo data={filteredData} />
        </div>
    );
};

export default Home;
