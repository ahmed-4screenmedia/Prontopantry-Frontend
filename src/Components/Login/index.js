import React, { useState } from "react";
import Logo from "../../Assets/Images/Logo.webp";
import BackGroundImage from "../../Assets/Images/BG.webp";
import { saveResidentFeedback, saveManagerFeedback } from "../../API/index";
import "./index.css";

const Login = () => {
  const [registeredName, setRegisterdName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [resident, setResident] = useState(false);
  const [manager, setManager] = useState(false);
  const [selectedBuilding, setSlectedBuilding] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [buildingLocation, setBuildingLocation] = useState("");

  const clearFields = () => {
    setEmail("");
    setNumber("");
    setRegisterdName("");
    setInvalidEmail(false);
    setInvalidNumber(false);
    setEmptyFields(false);
    setSlectedBuilding("");
    setManager(false);
    setResident(false);
    setEmptyFields(false);
  };

  const handleOnSaveDetails = () => {
    if (resident) {
      const body = {
        buildingName: selectedBuilding,
        name: registeredName,
        number: number,
        email: email,
      };

      saveResidentFeedback(body)
        .then((response) => {
          console.log(response);
          setSuccess(true);
          clearFields();
        })
        .catch((error) => {
          console.log("error......" + error);
        });
    } else if (manager) {
      const body = {
        name: registeredName,
        number: number,
        email: email,
        buildingLocation: buildingLocation,
        buildingName: buildingName,
      };

      saveManagerFeedback(body)
        .then((response) => {
          console.log(response);
          setSuccess(true);
          clearFields();
        })
        .catch((error) => {
          console.log("error......" + error);
        });
    }
  };

  const validateFields = () => {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const emailValidate = email.match(emailregex) ? true : false;
    const numberValidate = number.match(numberRegex) ? true : false;

    if (email === "" && number === "" && registeredName === "") {
      setEmptyFields(true);
    } else {
      const emailValidated = emailValidate
        ? setInvalidEmail(false)
        : setInvalidEmail(true);

      const numberValidated = numberValidate
        ? setInvalidNumber(false)
        : setInvalidNumber(true);

      const validated =
        emailValidate && numberValidate ? handleOnSaveDetails() : "";
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} className="img" />
      </div>
      <div className="main_section_container">
        <div></div>
        <div className="main_section">
          <div>
          </div>
          <div>
          </div>
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
          <div
            className={
              !manager && !resident && !success
                ? "initial_form_container"
                : invalidEmail || invalidNumber || emptyFields ? "error_form_container":success
                ? "success_form_container"
                : "form_container"
            }
          >
            {success && <div
              style={{
                color: "black",
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              Get in touch with Pronto
            </div>}
            {!manager && !resident && !success && (
              <div>
                <div
                  style={{
                    color: "black",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Let's connect…
                </div>
                <div
                  style={{
                    color: "black",
                    fontWeight: 300,
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                >
                  Please select one of the following:
                </div>
                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <button onClick={() => setResident(true)} className="button">
                    I am a building resident
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <button onClick={() => setManager(true)} className="button">
                    I am a building manager
                  </button>
                </div>
              </div>
            )}
            {(manager || resident) && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "1000px",
                }}
              >
                {manager && (
                  <div
                    style={{
                      color: "black",
                      fontWeight: 600,
                      textAlign: "left",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Get in touch to get Pronto Pantry in your building
                  </div>
                )}
                {resident && (
                  <div
                    style={{
                      color: "#000",
                      fontWeight: 300,
                      textAlign: "left",
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    Select your building:
                    <div
                      style={{
                        color: "#000",
                        marginTop: "4px",
                        fontSize: "15px",
                        fontWeight: 300,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="Paragon"
                        checked={selectedBuilding === "Paragon"}
                        onChange={() => setSlectedBuilding("Paragon")}
                      />
                      Paragon
                    </div>
                    <div
                      style={{
                        color: "#000",
                        marginTop: "2px",
                        fontSize: "15px",
                        fontWeight: 300,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="Streeter"
                        checked={selectedBuilding === "Streeter"}
                        onChange={() => setSlectedBuilding("Streeter")}
                      />
                      Streeter
                    </div>
                    <div
                      style={{
                        color: "#000",
                        marginTop: "2px",
                        fontWeight: 300,
                        fontSize: "15px",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="One Superior"
                        checked={selectedBuilding === "One Superior"}
                        onChange={() => setSlectedBuilding("One Superior")}
                      />
                      One Superior
                    </div>
                  </div>
                )}
                <input
                  className="input_fields"
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  value={registeredName}
                  onChange={(event) => {
                    setRegisterdName(event.target.value);
                  }}
                />
                {manager && (
                  <input
                    className="input_fields"
                    type="text"
                    name="Building Name"
                    placeholder="Building name where you would like Pronto Pantry"
                    value={buildingName}
                    onChange={(event) => {
                      setBuildingName(event.target.value);
                    }}
                  />
                )}
                {manager && (
                  <input
                    className="input_fields"
                    type="text"
                    name="Building Location"
                    placeholder="Building Location"
                    value={buildingLocation}
                    onChange={(event) => {
                      setBuildingLocation(event.target.value);
                    }}
                  />
                )}
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
                {resident && (
                  <div
                    style={{
                      color: "black",
                      fontSize: "15px",
                      textAlign: "left",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    Join us at the opening party - get notified!
                  </div>
                )}
                <input
                  className="input_fields"
                  type="text"
                  name="Phone Number"
                  placeholder="Your phone number"
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
            {/* {(invalidEmail || invalidNumber || emptyFields) && (
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
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: emptyFields?"20px" : invalidEmail || invalidNumber? "45px": "20px",
                    marginTop: "10px",
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
                    {emptyFields && <p>None of the fields are filled in</p>}
                  </div>
                </div>
              </div>
            )} */}
            {(manager || resident) && (
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
                className="success_text"
              >
                Thanks! We will be in touch.
              </div>
            )}
            {(resident || manager || success) && (
              <div
                style={{
                  color: "black",
                  marginTop: "12px",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                By signing up, you agree to our Privacy Policy.
              </div>
            )}
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
