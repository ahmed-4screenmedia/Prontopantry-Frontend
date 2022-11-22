/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import PDF from "../../Assets/DownloadPage.pdf";
import Logo from "../../Assets/Images/prontologo22.svg";
import QR from "../../Assets/Images/QR.jpg";
import APPSTORE from "../../Assets/Images/AppStore.svg";
import PLAYSTORE from "../../Assets/Images/PlayStore.svg";
import RECEIPT from "../../Assets/Images/Receipt.svg";
import ARROW from "../../Assets/Images/Arrow.svg";

const Downloads = (props) => {
  const renderQRContainer = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 30,
        }}
      >
        <text
          style={{
            fontFamily: "AvenirNext-Medium",
            fontSize: "8em",
            fontWeight: "400",
            color: "white",
            letterSpacing: 2,
            lineHeight: "1.5em",
            fontStyle: "italic",
          }}
        >
          {"SCAN AND GO"}
        </text>
        <text
          style={{
            fontFamily: "AvenirNext-Medium",
            fontSize: "25px",
            fontWeight: "500",
            color: "white",
            letterSpacing: 2,
          }}
        >
          {"Pronto is a self-service pantry, open24/7 for all residents"}
        </text>
        <img
          src={QR}
          style={{
            height: 400,
            width: 400,
            padding: 15,
            borderColor: "#FFF",
            borderStyle: "solid",
            borderRadius: 30,
            marginTop: 60,
          }}
        />
        <div
          style={{
            height: "40px",
            width: "30%",
            display: "flex",
            borderRadius: "12px",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <img
            src={APPSTORE}
            style={{
              height: "100%",
              cursor: "pointer",
              // width:'50%'
            }}
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/pronto-pantry/id1496061157"
              )
            }
          />
          <img
            src={PLAYSTORE}
            style={{
              height: "100%",
              cursor: "pointer",
              // width:'50%'
            }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.pronto_pantry.app&hl=en_US&gl=US"
              )
            }
          />
        </div>
      </div>
    );
  };

  const renderContentContainer = () => {
    return (
      <div
        style={{
          display: "flex",
          padding: "60px 40px",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            textAlign: "initial",
            paddingLeft: 85,
          }}
        >
          <div style={{ marginBottom: "10%" }}>
            <text class="heading">{"1. Download the app"}</text>
            <div class="content" style={{ position: "relative" }}>
              {
                "Point your smartphone camera at this QR code\nand tap the link or visit www.pronto-pantry.com/download"
              }
              <img src={ARROW} class="arrowImageContainer" />
            </div>
          </div>
          <div style={{ marginBottom: "10%" }}>
            <text class="heading">{"2. Scan shelf tags to add items"}</text>
            <div class="content">
              {
                "Each product has a QR code located on the shelf price tag below the\nitem. Open the app and scan any product tag you would like to buy."
              }
            </div>
          </div>
          <div style={{ marginBottom: "10%" }}>
            <text class="heading">{"3. Checkout and go"}</text>
            <div class="content" style={{ position: "relative" }}>
              {
                "Checkout in the app. Your purchase receipt will\nbe emailed to you instantly."
              }
              <img src={RECEIPT} class="receiptImageContainer" />
            </div>
          </div>
        </div>
        <div class="mobileImageContainer"></div>
      </div>
    );
  };

  return (
    <div className="main_container">
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "30px" }}
      >
        <img src={Logo} className="img" />
      </div>
      {renderQRContainer()}
      {renderContentContainer()}
      <div class="fotterContainer">
        <text class="content" style={{ textAlign: "initial" }}>
          {"Contact us anytime at support@pronto-pantry.com"}
        </text>
      </div>
    </div>
  );

  // return (
  //   <div className="main_container">
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           justifyContent: "space-evenly",
  //         }}
  //       >
  //         <div style={{ display: "flex", padding: "20px 40px" }}>
  //           <text
  //             style={{
  //               fontFamily: '"Roboto", Arial, sans-serif',
  //               fontSize: "25px",
  //               fontWeight: "500",
  //               color: "white",
  //               letterSpacing: 2,
  //             }}
  //           >
  //             {"1."}
  //           </text>
  //           <div
  //             style={{
  //               display: "flex",
  //               flexDirection: "column",
  //               width: "30vw",
  //             }}
  //           >
  //             <text
  //               style={{
  //                 fontFamily: "Simplicity",
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //                 textAlign: "initial",
  //               }}
  //             >
  //               {"Download the app"}
  //             </text>
  //             <text
  //               style={{
  //                 fontFamily: '"Roboto", Arial, sans-serif',
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //               }}
  //             >
  //               {"Point your camera at this QR code and tap the link or visit "}
  //               <a
  //                 href="www.pronto-pantry.com/download"
  //                 style={{
  //                   fontFamily: '"Roboto", Arial, sans-serif',
  //                   fontSize: "25px",
  //                   fontWeight: "500",
  //                   color: "white",
  //                   letterSpacing: 2,
  //                 }}
  //               >
  //                 {"www.pronto-pantry.com/download"}
  //               </a>
  //             </text>
  //           </div>
  //         </div>
  //         <div style={{ display: "flex", padding: "20px" }}>
  //           <text
  //             style={{
  //               fontFamily: "Simplicity",
  //               fontSize: "25px",
  //               fontWeight: "500",
  //               color: "white",
  //               letterSpacing: 2,
  //             }}
  //           >
  //             {"2."}
  //           </text>
  //           <div style={{ display: "flex", flexDirection: "column" }}>
  //             <text
  //               style={{
  //                 fontFamily: '"Roboto", Arial, sans-serif',
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //                 textAlign: "initial",
  //               }}
  //             >
  //               {"Scan shelf items to add items"}
  //             </text>
  //             <text
  //               style={{
  //                 fontFamily: '"Roboto", Arial, sans-serif',
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //               }}
  //             >
  //               {
  //                 "Each product has a QR code located on the shelf price tag below the item. Open the app and scan any product tag you would like to buy."
  //               }
  //             </text>
  //           </div>
  //         </div>
  //         <div style={{ display: "flex", padding: "20px" }}>
  //           <text
  //             style={{
  //               fontFamily: "Simplicity",
  //               fontSize: "25px",
  //               fontWeight: "500",
  //               color: "white",
  //               letterSpacing: 2,
  //             }}
  //           >
  //             {"3."}
  //           </text>
  //           <div style={{ display: "flex", flexDirection: "column" }}>
  //             <text
  //               style={{
  //                 fontFamily: '"Roboto", Arial, sans-serif',
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //                 textAlign: "initial",
  //               }}
  //             >
  //               {"Checkout and go"}
  //             </text>
  //             <text
  //               style={{
  //                 fontFamily: '"Roboto", Arial, sans-serif',
  //                 fontSize: "25px",
  //                 fontWeight: "500",
  //                 color: "white",
  //                 letterSpacing: 2,
  //               }}
  //             >
  //               {
  //                 "Checkout in the app. Your purchase receipt will be emailed to you instantly."
  //               }
  //             </text>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* <iframe
  //       src={`${PDF}#toolbar=0&navpanes=0&scrollbar=0&embedded=true`}
  //       width="100%"
  //       height="100%"
  //       frameborder="0"
  //       allowfullscreen
  //     /> */}
  //   </div>
  // );
};

export default Downloads;
