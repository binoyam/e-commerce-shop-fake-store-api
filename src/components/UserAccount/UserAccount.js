import "./UserAccount.css";
import UserIcon from "../../Assets/avatar.svg";

function UserAccount() {
  return (
    <>
    <div className="user-profile-pic">
      <img src={UserIcon} alt="avatar" />
    </div>
        
    <div className="user-account-details">
        <h1>You are not logged in</h1>
    </div>
    </>
  );
}

export default UserAccount;
