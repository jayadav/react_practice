import { useEffect, useRef, useState } from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";
function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const clearInput = useRef(null);
  const saveUsers = (user) => {
    // console.log(user);
    setUsers([...users, user]);
    setMessage("Data saved successfully!!!");
    clearInputBox();
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [message, users]);

  const clearInputBox = () => {
    clearInput.current.clear();
  };
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "35%" }}>
          {message && (
            <div
              style={{
                border: "1px solid grey",
                background: "#c2eddd",
                padding: "1%",
              }}
            >
              {message}
            </div>
          )}
          <UserForm saveUsers={saveUsers} ref={clearInput} />
        </div>
        <div style={{ width: "65%" }}>
          <UsersList users={users} />
        </div>
      </div>
    </>
  );
}

export default Users;
