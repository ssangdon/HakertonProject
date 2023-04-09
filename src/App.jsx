import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import Main from "./pages/Main";
import ChartPage from "./pages/ChartPage";
import { useRecoilState } from "recoil";
import { system } from "./recoil/recoilState";
import Navigation from "./components/Navigation/Navigation";

const snackbarColorMap = {
  background: {
    warning: "rgb(255,246,224)",
    info: "rgb(231,238,249)",
    success: "rgb(255,242,233)",
    error: "rgb(252,239,234)",
  },
  icon: {
    warning: "rgb(254,189,59)",
    info: "rgb(48,138,227)",
    success: "rgb(254,143,64)",
    error: "rgb(250,86,90)",
  },
};

const App = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [systemState, setSystemState] = useRecoilState(system);
  const makeSnackbar = (orderMessage, orderType) => {
    enqueueSnackbar(orderMessage, {
      variant: orderType,
      content: (key, message) =>
        systemState.isMobile ? (
          <div
            className="relativeBox flexRowWrapper round8 whiteColor font16middle"
            style={{
              padding: 6,
              minWidth: 300,
              minHeight: 30,
              backgroundColor: snackbarColorMap.background[orderType],
              border: `2px solid ${snackbarColorMap.icon[orderType]}`,
            }}
          >
            <div className="flexRowWrapper" style={{ width: 30, height: 30 }}>
              <div
                className="flexRowWrapper"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: snackbarColorMap.icon[orderType],
                }}
              >
                <img
                  src={`/image/${orderType}AlertIcon.png`}
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>

            <div
              className="flexColumnWrapper"
              style={{
                position: "relative",
                width: "100%",
                alignItems: "flex-start",
                padding: "0px 10px",
              }}
            >
              <div
                className="font16bold"
                style={{ color: snackbarColorMap.icon[orderType] }}
              >
                {orderType.substr(0, 1).toUpperCase() +
                  orderType.substr(1).toLowerCase()}
              </div>
              <div className="font14middle" style={{ color: "#000000" }}>
                {message}
              </div>
            </div>

            <div
              className="flexRowWrapper pointer"
              style={{ width: 30, height: 30 }}
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <img
                src="/image/alertCloseIcon.png"
                style={{ width: 14, height: 14 }}
              />
            </div>
          </div>
        ) : (
          <div
            className="relativeBox flexRowWrapper round8 whiteColor font16middle"
            style={{
              padding: 10,
              minWidth: 300,
              minHeight: 40,
              backgroundColor: snackbarColorMap.background[orderType],
              border: `2px solid ${snackbarColorMap.icon[orderType]}`,
            }}
          >
            {/* <div className='absoluteBox' style={{backgroundColor: '#FFFFFF',width: "100%",height: "100%",zIndex: -1}}></div> */}
            {/* <div className='flexRowWrapper' style={{width: 10,height: '100%'}} > */}
            <div className="flexRowWrapper" style={{ width: 40, height: 40 }}>
              <div
                className="flexRowWrapper"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: snackbarColorMap.icon[orderType],
                }}
              >
                <img
                  src={`/image/${orderType}AlertIcon.png`}
                  style={{ width: 40, height: 40 }}
                />
              </div>
            </div>
            {/* </div> */}

            <div
              className="flexColumnWrapper"
              style={{
                position: "relative",
                width: "100%",
                alignItems: "flex-start",
                padding: "4px 10px",
              }}
            >
              <div
                className="font16bold"
                style={{ color: snackbarColorMap.icon[orderType] }}
              >
                {orderType.substr(0, 1).toUpperCase() +
                  orderType.substr(1).toLowerCase()}
              </div>
              <div className="font14middle" style={{ color: "#000000" }}>
                {message}
              </div>
            </div>

            <div
              className="flexRowWrapper pointer"
              style={{ width: 30, height: 30 }}
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <img
                src="/image/alertCloseIcon.png"
                style={{ width: 14, height: 14 }}
              />
            </div>
          </div>
        ),
    });
  };

  useEffect(() => {
    if (systemState.alertData.message !== null) {
      makeSnackbar(systemState.alertData.message, systemState.alertData.type);

      //default success error warning info
    }
  }, [systemState.alertData.count]);

  return (
    <BrowserRouter>
      <div style={{ border: "1px solid green" }}>
        <div
          className="relativeBox"
          style={{ width: "100%", height: "calc(100vh - 50px)" }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            {/* 스플레쉬 화면 */}
            <Route path="/ChartPage" element={<ChartPage />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
