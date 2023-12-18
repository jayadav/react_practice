function UsersList(props) {
  console.log(props);
  const users = props.users || [];
  let userTbl = "";
  if (users.length > 0) {
    userTbl = users.map((item, index) => {
      return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.mobile}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <h2>User List</h2>
      {/* {userTbl !== "" && <ul> {userTbl}</ul>} */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{userTbl}</tbody>
      </table>
      <style jsx="true">
        {`
          /* Apply styles to the entire table */
          table {
            width: 100%;
            border-collapse: collapse;
          }

          /* Style for odd rows */
          tr:nth-child(odd) {
            background-color: #f2f2f2; /* Light gray background */
          }

          /* Style for even rows */
          tr:nth-child(even) {
            background-color: #ffffff; /* White background */
          }

          /* Style for table cells */
          td {
            padding: 8px;
            border: 1px solid #ddd; /* Border color */
          }
        `}
      </style>
    </>
  );
}

export default UsersList;
