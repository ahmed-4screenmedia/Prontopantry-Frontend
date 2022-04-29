import React, { useState } from "react";
import Logo from "../../Assets/Images/Logo.webp";
import BackGroundImage from "../../Assets/Images/BG.webp";
import { saveFeedback } from "../../API/index";
import "./index.css";

const Login = () => {
  const [registeredName, setRegisterdName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearFields = () => {
    setEmail("");
    setNumber("");
    setRegisterdName("");
    setInvalidEmail(false);
    setInvalidNumber(false);
  };

  const handleOnSaveFeedback = () => {
    const body = {
      name: registeredName,
      number: number,
      email: email,
    };

    saveFeedback(body)
      .then((response) => {
        console.log(response);
        setSuccess(true);
        clearFields();
      })
      .catch((error) => {
        console.log("error......" + error);
        clearFields();
      });
  };

  const validateFields = () => {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const emailValidate = email.match(emailregex) ? true : false;
    const numberValidate = number.match(numberRegex) ? true : false;

    const emailValidated = emailValidate
      ? setInvalidEmail(false)
      : setInvalidEmail(true);

    const numberValidated = numberValidate
      ? setInvalidNumber(false)
      : setInvalidNumber(true);

    const validated =
      emailValidate && numberValidate ? handleOnSaveFeedback() : "";
  };

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} className="img" />
      </div>
      <div className="main_section_container">
        <div className="main_section">
          <div className="text_contianer">
            <div className="header_text">
              Food and Beverage for Luxury Highrise
            </div>
            <div className="sub_text">
              Pronto is an exclusive food and beverage amenity located in your
              building. We repurpose an existing space to bring lifestyle
              convenience to apartment living.
            </div>
          </div>
          <div className={!success?"form_container":"success_form_container"}>
            <div
              style={{
                color: "black",
                fontWeight: 600,
              }}
            >
              Get in touch with Pronto
            </div>
            {!success && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "1000px",
                }}
              >
                <input
                  className="input_fields"
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={registeredName}
                  onChange={(event) => {
                    setRegisterdName(event.target.value);
                  }}
                />
                <input
                  className="input_fields"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                {invalidEmail && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    Please enter a valid email address
                  </p>
                )}
                <input
                  className="input_fields"
                  type="text"
                  name="Number"
                  placeholder="Number"
                  value={number}
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                />
                {invalidNumber && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    Please put a correct phone number
                  </p>
                )}
              </div>
            )}
            {(invalidEmail || invalidNumber) && (
              <div
                style={{
                  margin: 0,
                  padding: 0,
                  border: 0,
                }}
              >
                <div
                  style={{
                    background: "#F95D51",
                    padding: "10px",
                    textAlign: "center",
                    marginBottom: "20px",
                    width:"300px"
                  }}
                >
                  <div
                    style={{
                      padding: 0,
                      fontSize: "16px",
                    }}
                  >
                    {invalidEmail && <p>Please enter a valid email address</p>}
                    {invalidNumber && <p>Please put a correct phone number</p>}
                  </div>
                </div>
              </div>
            )}
            {!success && (
              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <button onClick={validateFields} className="button">
                  Contact us
                </button>
              </div>
            )}
            {success && (
              <div
                style={{
                  color: "#fff",
                  backgroundColor: "#62C584",
                  width: "15vw",
                  height: "9vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
                  fontSize: "16px",
                  lineHeight: "1.4",
                }}
              >
                Thanks! We will be in touch.
              </div>
            )}
            <div
              style={{
                color: "black",
              }}
            >
              By signing up, you agree to our Privacy Policy.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          color: "grey",
          fontSize: "15px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <p>Pronto Hospitality</p>
      </div>
    </div>
  );
};

export default Login;
