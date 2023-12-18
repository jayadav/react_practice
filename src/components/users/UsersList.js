function UsersList(props) {
    console.log(props);
  const users = props.users || [];
  let userTbl = "";
  if (users.length > 0) {
    userTbl = users.map((item, index) => {
      return (
        <li>
          {item.name} - {item.mobile} - {item.email}
        </li>
      );
    });
  }

  return (
    <>
      <h2>User List</h2>
      {userTbl !== "" && <ul> {userTbl}</ul>}
    </>
  );
}

export default UsersList;
