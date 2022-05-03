import { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";

import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import Promotion from "components/molecules/Promotion/Promotion";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "./api";
import { useSelector, useDispatch } from "react-redux";
import {addDataAccount} from "helpers/call-api"

import "./LoginScreen.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const LoginScreen = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredRegisterEmail, setEnteredRegisterEmail] = useState("");
  const [emailRegisterIsValid, setEmailRegisterIsValid] = useState();
  const [enteredRegisterPassword, setEnteredRegisterPassword] = useState("");
  const [passwordRegisterIsValid, setPasswordRegisterIsValid] = useState();
  const [formRegisterIsValid, setFormRegisterIsValid] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accounts, status] = useSelector((state) => [
    state?.loginScreen?.accounts,
    state?.loginScreen?.status,
  ]);
  useEffect(() => {
    if (status === "idle") dispatch(getAccounts());
  }, [dispatch, status]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const onLogin = (email, password) => {
    if (
      accounts &&
      !!accounts.length &&
      !!accounts.filter(
        (item) => item.email === email && item.password === password
      ).length
    ) {
      localStorage.setItem("isLoggedIn", "1");
      navigate("/");
    } else alert("Bạn đã nhập sai!!");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  //register
  const emailRegisterChangeHandler = (event) => {
    setEnteredRegisterEmail(event.target.value);

    setFormRegisterIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordRegisterChangeHandler = (event) => {
    setEnteredRegisterPassword(event.target.value);

    setFormRegisterIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailRegisterHandler = () => {
    setEmailRegisterIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordRegisterHandler = () => {
    setPasswordRegisterIsValid(enteredPassword.trim().length > 6);
  };

  const onRegister = (email, password) => {
    addDataAccount("account",email,password);
  };

  const submitRegisterHandler = (event) => {
    event.preventDefault();
    onRegister(enteredRegisterEmail, enteredRegisterPassword);
  };

  return (
    <ContentLayout>
      <div className="login promotion--title">
        <Tabs
          className="promotion--tabs pb-4"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="THÀNH VIÊN" {...a11yProps(0)} />

          <Tab label="Q&A" {...a11yProps(1)} />

          <Tab label="ĐĂNG KÝ" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className="login--wrapper">
            <div className="login--card">
              <form onSubmit={submitHandler}>
                <div
                  className={`control ${
                    emailIsValid === false ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                  />
                </div>
                <div
                  className={`control ${
                    passwordIsValid === false ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    type="password"
                    id="password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                  />
                </div>
                <div className="actions">
                  <button
                    type="submit"
                    className="button"
                    disabled={!formIsValid}
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}></TabPanel>

        <TabPanel value={value} index={2}>
          <div className="login--wrapper">
            <div className="login--card">
              <form onSubmit={submitRegisterHandler}>
                <div
                  className={`control ${
                    emailRegisterIsValid === false ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="emailRegister"
                    value={enteredRegisterEmail}
                    onChange={emailRegisterChangeHandler}
                    onBlur={validateEmailRegisterHandler}
                  />
                </div>
                <div
                  className={`control ${
                    passwordRegisterIsValid === false ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    type="password"
                    id="passwordRegister"
                    value={enteredRegisterPassword}
                    onChange={passwordRegisterChangeHandler}
                    onBlur={validatePasswordRegisterHandler}
                  />
                </div>
                <div className="actions">
                  <button
                    type="submit"
                    className="button"
                    disabled={!formRegisterIsValid}
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </TabPanel>
      </div>

      <Promotion />
    </ContentLayout>
  );
};

export default LoginScreen;
