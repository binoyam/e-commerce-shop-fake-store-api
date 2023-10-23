import "./UserAccount.css";
import UserIcon from "../../Assets/avatar.svg";

function UserAccount() {
  return (
    <div className="user-account">

      <div className="user-profile-pic">
        <img src={UserIcon} alt="avatar" />
      </div>
     
    </div>
  );
}

export default UserAccount;
