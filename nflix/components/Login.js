// Login.js
import Header from "./Header.js";

const Login = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_large.jpg"
        alt="Netflix Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      
    </div>
  );
};

export default Login;