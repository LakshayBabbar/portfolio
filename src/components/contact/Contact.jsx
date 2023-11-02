import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import contactImg from "../../assets/contact.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className={classes.wrapper} id="contact">
      <div className={classes.contactImg}>
        <motion.img
          src={contactImg}
          alt="Contact"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      </div>
      <ContactForm />
    </div>
  );
};
export default Contact;
