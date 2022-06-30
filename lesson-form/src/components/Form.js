import React, { useState } from "react";
const initialState = {
  username: "",
  password: "",
  fullname: "",
};
const Form = (props) => {
  const [user, setUser] = useState(initialState);

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [fullname, setFullname] = useState("");

  //   const onUsernameChange = (event) => {
  //     setUsername(event.target.value);
  //   };
  //   const onPasswordChange = (event) => {
  //     setPassword(event.target.value);
  //   };
  //   const onHandleFullnameChange = (event) => {};

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // Dynamic key in object
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //logic here
    console.log(user);

    //Reset form
    setUser(initialState);
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            name="username"
            onChange={onChangeHandler}
            value={user.username}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password"> Password</label>
          <input
            id="password"
            name="password"
            onChange={onChangeHandler}
            value={user.password}
          />
        </div>
        <div className="form-control">
          <label htmlFor="fullname"> Fullname</label>
          <input
            id="fullname"
            name="fullname"
            onChange={onChangeHandler}
            value={user.fullname}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
