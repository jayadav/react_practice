import { useState } from "react";
// import Input from "../util/Input";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "australia",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Form Data:", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            value={formData.firstname}
            onChange={handleChange}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            value={formData.lastname}
            onChange={handleChange}
          />

          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
            value={formData.subject}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Contact;
