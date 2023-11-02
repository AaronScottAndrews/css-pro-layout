import './Header.css';
import SearchIcon from "./search.svg";

const Header = (searchTerm, setSearchTerm, searchMovies) => {
    return (
        <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>
    );
}

export default Header;