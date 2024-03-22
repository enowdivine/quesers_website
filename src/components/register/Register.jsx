import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [occupation, setoccupation] = useState("");
  const [education, seteducation] = useState("");
  const [resume, setresume] = useState(null);
  const [password, setpassword] = useState("");

  console.log(resume);

  const vendorRegistration = async (e) => {
    e.preventDefault();
    try {
      if (
        name &&
        email &&
        phone &&
        occupation &&
        education &&
        resume &&
        password
      ) {
        const data = {
          username: name,
          email,
          phone,
          occupation,
          educationLevel: education,
          resume: resume,
          password,
        };
        console.log(data);
        setLoading(true);
        await dispatch(register(data)).then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          } else {
            toast.success(res.payload.message);
            navigate("/");
            setLoading(false);
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
    <div className={styles.formWrapper}>
      <div className={styles.title}>
        <h1>
          Ques<span>ers</span>
        </h1>
        <p>Fill The Form To Beecome A Vendor</p>
      </div>
      <form className={styles.form}>
        <div>
          <p>Name*</p>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <p>Email*</p>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <p>Phone number*</p>
          <input
            type="number"
            placeholder="Enter Number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div>
          <p>Occupation*</p>
          <input
            type="text"
            placeholder="Enter Occupation"
            value={occupation}
            onChange={(e) => setoccupation(e.target.value)}
          />
        </div>
        <div>
          <p>Education*</p>
          <input
            type="text"
            placeholder="Enter Level of Education"
            value={education}
            onChange={(e) => seteducation(e.target.value)}
          />
        </div>
        <div>
          <p>Resume*</p>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setresume(e.target.files[0])}
          />
        </div>
        <div>
          <p>Password*</p>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className={styles.btns}>
          <button onClick={vendorRegistration}>
            {loading ? "Loading..." : "Submit"}
          </button>
          <a href="/">Go Back</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
