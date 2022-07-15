import React, { useState } from "react";

import SearchUserForm from "../components/SearchUserForm";
import UserList from "../components/UserList";

const Home = () => {
  const [users, setUsers] = useState([]);

  const onSearchUser = (users) => {
    setUsers(users);
  };

  return (
    <div className="container">
      <SearchUserForm onSearchUser={onSearchUser} />
      <UserList userListData={users} />
    </div>
  );
};

export default Home;
