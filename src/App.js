import "./App.css";
import Profile from "./Component/profile";

function App() {
  return (
    <div className="App  m-lg-5 m-3">
      <div className="color-spread spread1"></div>
      <div className="color-spread spread2"></div>
      <div className="color-spread spread3"></div>
      <div className="color-spread spread4"></div>
      {/* <div className="color-spread spread5"></div> */}
      <div className="color-spread spread6 d-lg-block  d-none "></div>
      <div className="color-spread spread7 d-lg-block  d-none "></div>
      <div className="Profile">
        <Profile />
      </div>
    </div>
  );
}

export default App;
