import React from "react";
import styles from "./Footer.module.css";
import { FaSearchLocation, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../store/reducers/app";
import { useState } from "react";

const Footer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (name && email && subject && message) {
        const data = {
          name,
          email,
          subject,
          message,
        };
        setLoading(true);
        await dispatch(sendEmail(data)).then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          } else {
            toast.success(res.payload.message);
            setLoading(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            return;
          }
        });
      } else {
        toast.error("All field are required");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.quesers}>
          <div>
            <h2>
              Ques<span className={styles.brand}>ers</span>
            </h2>
            <div>
              <i>A Weapon To Academic Success</i>
            </div>
            <div>
              <p>University of Buea</p>
              <p>Cameroon</p>
            </div>
            <div className={styles.socials}>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaSkype />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <FaSearchLocation />
            </div>
            <div>
              <h2>Location:</h2>
              <p>University of Buea, Cameroon</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <MdOutlineEmail />
            </div>
            <div>
              <h2>Email:</h2>
              <p>findieteam00@gmail.com</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <IoPhonePortraitOutline />
            </div>
            <div>
              <h2>Call:</h2>
              <p>University of Buea, Cameroon</p>
            </div>
          </div>
        </div>
        <div className={styles.formDiv}>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={sendMessage}>
              <span>
                <FaTelegramPlane />
              </span>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
