import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  const { userListData } = props;
  return (
    <div className="user-list">
      {userListData &&
        userListData.map((user) => {
          return <UserItem user={user} />;
        })}
    </div>
  );
};

export default UserList;
