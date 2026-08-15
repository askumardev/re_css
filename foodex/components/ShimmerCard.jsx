import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer shimmer-img"></div>
      <div className="shimmer shimmer-text" style={{ marginTop: "10px", height: "20px" }}></div>
      <div className="shimmer shimmer-text" style={{ marginTop: "8px", height: "16px", width: "80%" }}></div>
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <div className="shimmer shimmer-text" style={{ flex: 1, height: "14px" }}></div>
        <div className="shimmer shimmer-text" style={{ flex: 1, height: "14px" }}></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
