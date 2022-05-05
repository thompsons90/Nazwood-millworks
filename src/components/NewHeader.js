import "../App.scss";
import Logo from "../logo.png";

export const NewHeader = () => {
  return (
    <div id="header-container">
      <img src={Logo} id="main-logo" alt="company logo"></img>
      <div id="header-text-container">
        <h1>Nazwood</h1>
        <h1>Millworks</h1>
        <hr />
      </div>
    </div>
  );
};
