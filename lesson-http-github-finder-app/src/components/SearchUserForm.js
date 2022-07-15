import { useState } from "react";
import axios from "axios";

const SearchUserForm = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onClearSearchValue = () => {
    setSearchValue("");
  };
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Goi API den Github => response list users
    // https://api.github.com/search/users?q=${searchValue}
    const searchResponse = await axios.get(
      `https://api.github.com/search/users?q=${searchValue}`
    );
    const searchData = searchResponse.data.items;
    props.onSearchUser(searchData);
    onClearSearchValue();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitHandler}>
        <input
          name="searchValue"
          value={searchValue}
          onChange={onChangeHandler}
          className="search-input"
          placeholder="Search user"
        />
        <button
          type="button"
          className="submit-btn"
          onClick={onClearSearchValue}
        >
          Clear
        </button>
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchUserForm;
