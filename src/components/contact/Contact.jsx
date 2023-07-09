import css from "./Contact.module.css";

import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    for_company: "SEIASECURE",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://dev.seiasecure.com/api/v1/web_form", formData)
      .then((response) => {
        // console.log("Response:", response.data);
        if (response.status === 200) {
          // Show success notification
          toast.success("Thanks! Team seiaSecure Will Contact You");
          setFormData(initialFormData);
        } else if (response.status === 400) {
          toast.success("Thanks! Team seiaSecure Will Contact You");
          setFormData(initialFormData);
        } else {
          toast.success("Thanks! Team seiaSecure Will Contact You");
          setFormData(initialFormData);
        }
      })
      .catch((error) => {
        toast.success("Thanks! Team seiaSecure Will Contact You");
        setFormData(initialFormData);
      });
  };

  return (
    <>
      <form className={css.contact_right} onSubmit={handleSubmit}>
        <div className={css.input_box}>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            placeholder="First Name"
            className={css.fName_input}
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            placeholder="Last Name"
            className={css.lName_input}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={css.email_input}
          />
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className={css.message_input}
          />
        </div>
        <button type="submit" className={css.contact_btn}>
          Send
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Contact;
