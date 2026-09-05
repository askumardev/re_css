import "../header.css";
//import img from "./images/atom.png";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const arrDesc  = ["Sample", "Core", "Crucial", 
    "Important", "Essential", "Fundamental", "Necessary", 
    "Required", "Vital", "Critical"];
  const desc = arrDesc[genRandomInt(3)];
  return (
    <div>
      <header>
        <h1 className="header-title">React Essentials</h1>
        {/* <img src={img} alt="React Atom Logo" /> */}
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

export default Header;