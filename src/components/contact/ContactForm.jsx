import classes from "./ContactForm.module.css";
import { useRef, useState } from "react";
import Modal from "../UI/Modal";

const ContactForm = () => {
  const onEnterName = useRef();
  const onEnterNo = useRef();
  const onEnterEmail = useRef();
  const onEnterTitle = useRef();
  const onEnterMssg = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function SendEmail() {
    window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "lakshaybabbar0118@outlook.com",
            Password: "F6B7EC0F8962BFCFBB1FD0AD14DCDD95C047",
            To: 'lakshaybabbar0118@gmail.com',
            From: "lakshaybabbar0118@outlook.com",
            Subject: onEnterTitle.current.value,
            Body: "Name: " + onEnterName.current.value
                + "<br> Phone Number: " + onEnterNo.current.value
                + "<br> Email: " + onEnterEmail.current.value
                + "<br> Message: " + onEnterMssg.current.value
        }).then(
            message => console.log(message)
        );
    setIsModalOpen(true);
  }

  const modalCloseHandler = () => setIsModalOpen(false);

  const FormData = (event) => {
    event.preventDefault();
    onEnterName.current.value = "";
    onEnterNo.current.value = "";
    onEnterEmail.current.value = "";
    onEnterTitle.current.value = "";
    onEnterMssg.current.value = "";
  };
  return (
    <>
      <div className={classes.wrapper}>
        <h1>Get In Touch</h1>
        <form
          className={classes.form_wrapper}
          onSubmit={FormData}
          data-aos="zoom-in"
        >
          <div className={classes.inputs}>
            <input placeholder="Name" type="text" ref={onEnterName} />
            <input placeholder="Phone No" type="number" ref={onEnterNo} />
            <input placeholder="Email" type="email" ref={onEnterEmail} />
            <input placeholder="Title" type="text" ref={onEnterTitle} />
          </div>
          <textarea placeholder="Your Message!" ref={onEnterMssg} />
          <button type="submit" className={classes.btn} onClick={SendEmail}>
            Submit
          </button>
        </form>
      </div>
      {isModalOpen && <Modal modalClose={modalCloseHandler}/>}
    </>
  );
};
export default ContactForm;
