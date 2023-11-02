import classes from "./ContactForm.module.css";
import { useRef, useState } from "react";
import Modal from "../UI/Modal";
import { motion } from "framer-motion";

const ContactForm = () => {
  const onEnterName = useRef();
  const onEnterNo = useRef();
  const onEnterEmail = useRef();
  const onEnterTitle = useRef();
  const onEnterMssg = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function SendEmail() {
    if (
      onEnterName.current.value.trim() <= 0 ||
      !onEnterEmail.current.value.includes("@") ||
      !onEnterEmail.current.value.includes(".") ||
      onEnterMssg.current.value.trim() <= 0
    ) {
      return;
    } else {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lakshaybabbar0118@outlook.com",
        Password: "F6B7EC0F8962BFCFBB1FD0AD14DCDD95C047",
        To: "lakshaybabbar0118@gmail.com",
        From: "lakshaybabbar0118@outlook.com",
        Subject: onEnterTitle.current.value,
        Body:
          "Name: " +
          onEnterName.current.value +
          "<br> Phone Number: " +
          onEnterNo.current.value +
          "<br> Email: " +
          onEnterEmail.current.value +
          "<br> Message: " +
          onEnterMssg.current.value,
      }).then((message) => console.log(message));
      setIsModalOpen(true);
    }
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
  const focusInputs = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 1000, damping: 15 },
  };
  return (
    <>
      <div className={classes.wrapper}>
        <h1>Get In Touch</h1>
        <motion.form
          className={classes.form_wrapper}
          onSubmit={FormData}
          initial={{ y: "10vh", opacity: 0}}
          whileInView={{ opacity: 1, y: 0, transition:{type: "spring", damping: 15, stiffness: 400} }}
        >
          <div className={classes.inputs}>
            <motion.input
              whileFocus={focusInputs}
              placeholder="Name"
              type="text"
              ref={onEnterName}
              required
            />
            <motion.input
              whileFocus={focusInputs}
              placeholder="Phone No"
              type="number"
              ref={onEnterNo}
            />
            <motion.input
              whileFocus={focusInputs}
              placeholder="Email"
              type="email"
              ref={onEnterEmail}
              required
            />
            <motion.input
              whileFocus={focusInputs}
              placeholder="Title"
              type="text"
              ref={onEnterTitle}
            />
          </div>
          <motion.textarea
            whileFocus={focusInputs}
            placeholder="Your Message!"
            ref={onEnterMssg}
            required
          />
          <button type="submit" className={classes.btn} onClick={SendEmail}>
            Submit
          </button>
        </motion.form>
      </div>
      {isModalOpen && <Modal modalClose={modalCloseHandler} />}
    </>
  );
};
export default ContactForm;
