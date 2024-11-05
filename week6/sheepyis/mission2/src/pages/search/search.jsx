import { useState } from "react";
import SearchInput from "../../components/input/searchInput";
import ListMovie from "../../components/movies/list-movie";

const SearchPage = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="outletContainer">
            <SearchInput setQuery={setQuery} />
            
            {query && <ListMovie url={`/search/movie?query=${query}&include_adult=false&page=1`} query={query} />}
        </div>
    );
};

export default SearchPage;
