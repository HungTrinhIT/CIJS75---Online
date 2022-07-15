import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//https://api.github.com/users/HungTrinhIT

const UserDetail = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const login = params.login;

  const getUserData = async () => {
    const userData = await axios.get(`https://api.github.com/users/${login}`);
    setUser(userData.data);
  };

  // Day la lifecycle mà nó sẽ được chạy 1 lần duy nhất sau render (đầu tiên)
  useEffect(() => {
    getUserData();
  }, []);

  const { avatar_url, name, location, html_url, bio, blog } = user;
  return (
    <div className="container">
      <div className="user-profile">
        <div className="user-profile__left">
          <img src={avatar_url} alt="avatar" />
          <p>{name}</p>
          {location && (
            <p>
              <strong>Location</strong>: {location}
            </p>
          )}
        </div>
        <div className="user-profile__right">
          <p>Username: {login}</p>
          {bio && <p>{bio}</p>}
          {blog && (
            <p>
              <strong>Blog:</strong> {blog}
            </p>
          )}
          <a href={html_url} target="_blank" rel="noreferrer">
            Visit Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

/*
  MD1 && MD2 => T && T
  F && MD2
*/
