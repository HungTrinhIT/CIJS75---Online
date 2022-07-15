import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserItem = (props) => {
  const { user } = props;

  // hook
  const navigate = useNavigate();

  const { avatar_url, login } = user;

  const onShowMore = () => {
    navigate(`/users/${login}`);
  };
  return (
    <div className="user-item">
      <img src={avatar_url} alt="user github" />
      <h6>{login}</h6>
      <button className="showMore-btn" onClick={onShowMore}>
        More
      </button>
    </div>
  );
};

export default UserItem;
