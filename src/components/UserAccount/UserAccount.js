import "./UserAccount.css";
import UserIcon from "../../Assets/Images/avatar.svg";
import { useState } from "react";

function UserAccount() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  function toggleUser() {
    setIsUserOpen(!isUserOpen);
  }
  return (
    <>
      <div onClick={toggleUser} className="user-profile-pic">
        <img src={UserIcon} alt="avatar" />
      </div>

      <div
        className={
          isUserOpen ? "user-account-details show" : "user-account-details"
        }
      >
        <h1>You are not logged in</h1>
      </div>
    </>
  );
}

export default UserAccount;
