import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={css.contact_right}>
        <div className={css.input_box}>
          <input
            type="text"
            placeholder="First Name"
            className={css.fName_input}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={css.lName_input}
          />
          <input type="email" placeholder="Email" className={css.email_input} />
          <textarea
            type="text"
            placeholder="Message"
            className={css.message_input}
          />
        </div>
        <button className={css.contact_btn}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
