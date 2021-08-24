import React from "react";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  let history = useHistory();

  const handleLogout = () => {
    alert("logout");
    localStorage.removeItem("user");
    history.push("/Login");
  };

  return (
    <div>
      <h2>welcome to lading page</h2>
      <button type="Submit" className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
