import { FiSearch } from "react-icons/fi";
import { Container } from "../../styles/Global.styled";
import { Input, SearchBar } from "../../styles/SearchAndFilter.styled";

const Search = ({ searchTerm, handleChange, handleSearch }) => {
    return (
        <Container>
            <SearchBar onSubmit={handleSearch}>
                <Input
                    className="input"
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <FiSearch className="searchIcon" />
            </SearchBar>
        </Container>
    );
};

export default Search;
