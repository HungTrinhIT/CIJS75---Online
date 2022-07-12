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
  useEffect(() => {
    getUserData();
  }, []);

  return <div>UserDetail</div>;
};

export default UserDetail;
