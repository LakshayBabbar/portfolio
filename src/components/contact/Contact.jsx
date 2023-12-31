import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import contactImg from "../../assets/contact.webp";

const Contact = () => {
  return (
    <div className={classes.wrapper} id="contact">
      <div className={classes.contactImg}>
        <img src={contactImg} alt="Contact" />
      </div>
      <ContactForm />
    </div>
  );
};
export default Contact;
