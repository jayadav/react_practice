import { forwardRef, useImperativeHandle, useState } from "react";

const UserForm = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  useImperativeHandle(ref, () => ({
    clear: () => {
      setName(() => "");
      setEmail(() => "");
      setMobile(() => "");
    },
  }));

  const validateMobile = (mobile_num) => {
    const numResgx = /^[0-9]+$/;
    if (numResgx.test(mobile_num)) {
      return true;
    } else {
      alert("Mobile number is not valid.");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mobile === "" || email === "") {
      alert("Please enter all field.");
      return false;
    }
    if (mobile) {
      if (validateMobile(mobile)) {
        const users = {
          name,
          mobile,
          email,
        };
        props.saveUsers(users);
        setName(() => "");
        setEmail(() => "");
        setMobile(() => "");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: "2%" }}>
        <h1>Add New Users</h1>
        <div>
          <label htmlFor="uname">Name</label>
          <input
            id="uname"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="umobile">Mobile</label>
          <input
            id="umobile"
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="uemail">Email</label>
          <input
            id="uemail"
            type="email"
            name="email"
            data-testid="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button id="submit_btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
});

export default UserForm;
