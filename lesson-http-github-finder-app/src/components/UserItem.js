import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserItem = (props) => {
  const { user } = props;

  const navigate = useNavigate();
  const params = useParams();
  console.log({ params });

  const { avatar_url, login } = user;
  const onShowMore = () => {
    navigate(`/users/${login}`);
  };
  return (
    <div className="user-item">
      <img src={avatar_url} alt="user github" />
      <p>{login}</p>
      <button onClick={onShowMore}>More</button>
    </div>
  );
};

export default UserItem;
