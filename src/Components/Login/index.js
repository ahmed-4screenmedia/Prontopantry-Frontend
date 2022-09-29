import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.webp";
import BackGroundImage from "../../Assets/Images/BG.webp";
import { saveResidentFeedback, saveManagerFeedback } from "../../API/index";
import BackArrow from "../../Utils/Images/arrow.png";
import "./index.css";

const Login = () => {
  const [registeredName, setRegisterdName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [answer, setAnswer] = useState([""]);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [resident, setResident] = useState(false);
  const [checked, setChecked] = useState(false);
  const [manager, setManager] = useState(false);
  const [selectedBuilding, setSlectedBuilding] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [buildingLocation, setBuildingLocation] = useState("");

  const history = useNavigate();

  const clearFields = () => {
    setEmail("");
    setNumber("");
    setRegisterdName("");
    setInvalidEmail(false);
    setInvalidNumber(false);
    setInvalidName(false);
    setEmptyFields(false);
    setSlectedBuilding("");
    setManager(false);
    setResident(false);
    setEmptyFields(false);
    setAnswer([""]);
    setUnitNumber("");
  };

  const handleOnAddItems = () => {
    const tempAns = [...answer];
    tempAns.push("");
    setAnswer(tempAns);
  };

  const handleOnSaveDetails = () => {
    if (resident) {
      const body = {
        buildingName: selectedBuilding,
        name: registeredName,
        number: number,
        email: email,
        questions: {
          question: `What are the top 5 items would you like us to carry in the pantry?`,
          answers: answer,
        },
        unit: unitNumber,
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

    const emailValidate = emailregex.test(email);
    const numberValidate = numberRegex.test(number);
    const nameValidate =
      registeredName !== "" && isNaN(Number(registeredName)) ? true : false;

    if (manager && email === "" && number === "" && registeredName === "") {
      setEmptyFields(true);
    } else if (
      resident &&
      email === "" &&
      registeredName === "" &&
      selectedBuilding === ""
    ) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);

      emailValidate ? setInvalidEmail(false) : setInvalidEmail(true);

      numberValidate ? setInvalidNumber(false) : setInvalidNumber(true);

      nameValidate ? setInvalidName(false) : setInvalidName(true);

      selectedBuilding ? setChecked(false) : setChecked(true);

      let validated;

      if (manager) {
        validated =
          emailValidate && numberValidate && nameValidate
            ? handleOnSaveDetails()
            : "";
      } else if (resident) {
        validated =
          emailValidate && !checked && nameValidate
            ? handleOnSaveDetails()
            : "";
      }
    }
  };

  const renderMainSectionContainer = () => {
    return (
      <div className="main_section_container">
        <div className="backrground"></div>
        <div className="backrground_paper"></div>
        <div className="main_section">
          <div
            className={success ? "success_outer_container" : "outer_container"}
          >
            <div className="inner_container">
              <div className="text_container">
                <div
                  style={{
                    margin: 0,
                    padding: 0,
                    border: 0,
                  }}
                >
                  <div className="header_text">
                    Food and Beverage for Luxury Highrise
                  </div>
                  <div className="sub_text">
                    Pronto is an exclusive food and beverage amenity located in
                    your building. We repurpose an existing space to bring
                    lifestyle convenience to apartment living.
                  </div>
                </div>
              </div>
              <div className="outer_form_container">
                <div
                  className={
                    !manager && !resident && !success
                      ? "initial_form_container"
                      : invalidEmail || invalidNumber || emptyFields
                      ? "error_form_container"
                      : success
                      ? "success_form_container"
                      : "form_container"
                  }
                >
                  {(manager || resident) && (
                    <div
                      style={{
                        display: "flex",
                        alignSelf: "flex-start",
                        paddingLeft: 10,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => clearFields()}
                    >
                      {/* <img src={BackArrow} style={{ height:21}}></img> */}
                      Home
                    </div>
                  )}
                  {success && (
                    <div
                      style={{
                        color: "black",
                        fontWeight: 600,
                        textAlign: "left",
                      }}
                    >
                      Get in touch with Pronto
                    </div>
                  )}
                  {!manager && !resident && !success && (
                    <div style={{ width: "100%" }}>
                      <div
                        style={{
                          color: "black",
                          fontWeight: 600,
                          textAlign: "left",
                          fontSize: "18px",
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
                          marginTop: "20px",
                        }}
                      >
                        <button
                          onClick={() => setResident(true)}
                          className="button"
                          style={{ width: "100%" }}
                        >
                          I am a building resident
                        </button>
                      </div>
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <button
                          onClick={() => setManager(true)}
                          className="button"
                          style={{ width: "100%" }}
                        >
                          I am a building manager
                        </button>
                      </div>
                    </div>
                  )}
                  {(manager || resident) && (
                    <div
                      id="form"
                      className={
                        resident
                          ? "form_text_fields_container"
                          : "form_text_fields_container_manager"
                      }
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
                            fontWeight: 600,
                            textAlign: "left",
                            fontSize: "15px",
                            marginTop: "10px",
                          }}
                        >
                          Select your building:
                          <div
                            style={{
                              color: "#000",
                              marginTop: "10px",
                              fontSize: "15px",
                              fontWeight: 300,
                            }}
                          >
                            <input
                              type="checkbox"
                              name="Paragon"
                              checked={selectedBuilding === "Paragon"}
                              onChange={() => setSlectedBuilding("Paragon")}
                              style={{ marginRight: 10 }}
                            />
                            Paragon
                          </div>
                          <div
                            style={{
                              color: "#000",
                              marginTop: "10px",
                              fontSize: "15px",
                              fontWeight: 300,
                            }}
                          >
                            <input
                              type="checkbox"
                              name="Streeter"
                              checked={selectedBuilding === "Streeter"}
                              onChange={() => setSlectedBuilding("Streeter")}
                              style={{ marginRight: 10 }}
                            />
                            Streeter
                          </div>
                          <div
                            style={{
                              color: "#000",
                              marginTop: "10px",
                              fontWeight: 300,
                              fontSize: "15px",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="One Superior"
                              checked={selectedBuilding === "One Superior"}
                              onChange={() =>
                                setSlectedBuilding("One Superior")
                              }
                              style={{ marginRight: 10 }}
                            />
                            One Superior
                          </div>
                          {(checked || emptyFields) && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                textAlign: "left",
                                fontWeight: 300,
                              }}
                            >
                              {" "}
                              Please select anyone of the building
                            </p>
                          )}
                        </div>
                      )}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <input
                          className="input_fields"
                          type="text"
                          name="Name"
                          placeholder="Your Name"
                          value={registeredName}
                          onChange={(event) => {
                            setRegisterdName(event.target.value);
                          }}
                        />
                        {(invalidName || emptyFields) && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              textAlign: "left",
                            }}
                          >
                            {" "}
                            Please put a name
                          </p>
                        )}
                        {manager && (
                          <input
                            className="input_fields"
                            type="text"
                            name="Building Name"
                            placeholder="Building Name where you would like Pronto Pantry"
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
                        {(invalidEmail || emptyFields) && (
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
                          <input
                            className="input_fields"
                            type="number"
                            name="Unit number"
                            placeholder="Unit number"
                            value={unitNumber}
                            onChange={(event) => {
                              setUnitNumber(event.target.value);
                            }}
                          />
                        )}

                        {resident && (
                          <div
                            style={{
                              color: "black",
                              fontSize: "15px",
                              textAlign: "left",
                              marginTop: "25px",
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
                          placeholder="Your Phone Number"
                          maxLength={10}
                          value={number}
                          onChange={(event) => {
                            if (/^\d*\.?\d*$/.test(event.target.value)) {
                              setNumber(event.target.value);
                            }
                          }}
                        />
                        {(invalidNumber || emptyFields) && !resident && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              textAlign: "left",
                            }}
                          >
                            {" "}
                            Please put a valid phone number
                          </p>
                        )}
                      </div>
                      {resident && (
                        <div
                          style={{
                            color: "black",
                            fontSize: "15px",
                            textAlign: "left",
                            marginTop: "25px",
                          }}
                        >
                          {" "}
                          What are the top 5 items would you like us to carry in
                          the pantry?
                        </div>
                      )}
                      {resident && (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {answer.map((item, index) => {
                            return (
                              <input
                                className="input_fields"
                                type="text"
                                name={"Item " + (index + 1)}
                                placeholder={"Item " + (index + 1)}
                                value={answer[index]}
                                onChange={(event) => {
                                  const temp = [...answer];
                                  temp[index] = event.target.value;
                                  setAnswer(temp);
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                      {resident && answer.length < 5 && (
                        <div
                          style={{
                            display: "flex",
                            alignSelf: "flex-end",
                            paddingLeft: 10,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: 12,
                          }}
                          onClick={handleOnAddItems}
                        >
                          Add another item
                        </div>
                      )}
                    </div>
                  )}
                  {(manager || resident) && (
                    <div
                      style={{
                        width: "100%",
                        marginTop: "35px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button onClick={validateFields} className="button">
                        Contact us
                      </button>
                    </div>
                  )}
                  {success && (
                    <div className="success_text">
                      Thanks! We will be in touch.
                    </div>
                  )}
                  {(resident || manager || success) && (
                    <div className="form_fotter">
                      By signing up, you agree to our{" "}
                      <a
                        onClick={() => history("/termsofservice")}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        Terms of Service.
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} className="img" />
      </div>
      {renderMainSectionContainer()}
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
