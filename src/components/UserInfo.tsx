import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserIDState, currentUserNameState } from "../atoms/userState";
import "./UserInfo.css";

const UserInfo: React.FC = () => {
  const [userId, setUserId] = useRecoilState(currentUserIDState);
  const userName = useRecoilValue(currentUserNameState);
  const onSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserId(parseInt(event.target.value));
    },
    [setUserId],
  );

  return (
    <div className="user-info">
      <label>사용자 ID:</label>
      <select className="user--id" value={userId} onChange={onSelectChange}>
        {Array(11)
          .fill("")
          .map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
      </select>
      <div className="user--name">{userName}</div>
    </div>
  );
};

export default UserInfo;
