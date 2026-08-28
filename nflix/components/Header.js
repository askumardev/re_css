// Header.js
const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black" style={{
      position: "absolute",
      top: "24px",
      left: "32px",
      width: "160px",
      zIndex: 10,
    }}>
      <img
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
        alt="Netflix"
        style={{
          width: "100%",
          display: "block",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))", // makes logo pop off the blurred bg
        }}
      />
    </div>
  );
};

export default Header;