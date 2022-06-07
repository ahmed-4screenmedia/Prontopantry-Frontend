import React from 'react';
import './index.css'
import logo from '../../Assets/Images/Logo.webp'
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {

    const navigate = useNavigate()
    return (
        <div className="main_section_container">
            <div className="backrground"></div>
            <div className="backrground_paper"></div>
            <div className="main_section">
                <div
                    /*  className={success ? "success_outer_container" : "outer_container"} */
                >
                    <div className="inner_container" >
                        <div className="text_container" >
                            {/* <div
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    border: 0,
                                }}
                            >
                                <div className="header_text" style={{ marginTop: "20%", marginLeft: "30%" }}>
                                    Welcome to Pronto
                                </div>
                                <button style={{ height: "15%", width: "25%", backgroundColor: "transparent", color: "FFF", marginLeft: "35%", border: "solid #FFF" }}>
                                    <p style={{ color: "#FFF", fontSize: 16 }}>Terms of service</p>
                                </button>
                            </div> */}

                        </div>
                        <div style={{ backgroundColor: "#FFF", width: "80%", position: "sticky", overflow: "scroll", textAlign: "center", fontSize: 14, padding: 20, marginLeft: "10%", marginTop: "10px", height:"100vh", scrollMargin:"1px" }}>
                            <img src={logo} onClick={() => navigate('/')} style={{ width:80, height:25, marginLeft:0}}/>
                            <h1>
                                Terms of service
                            </h1>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService;