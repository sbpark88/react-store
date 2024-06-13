import React, { useCallback } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useResetRecoilState,
} from "recoil";
import { currentUserIDState, currentUserNameState } from "../atoms/userState";
import "./UserInfo.css";

const UserInfo: React.FC = () => {
  const [userId, setUserId] = useRecoilState(currentUserIDState);
  const resetUserId = useResetRecoilState(currentUserIDState);
  const userNameLoadable = useRecoilValueLoadable(currentUserNameState);
  const onSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserId(parseInt(event.target.value));
    },
    [setUserId],
  );

  switch (userNameLoadable.state) {
    case "loading":
      return <div className="user-info">Loading...</div>;
    case "hasError":
      return (
        <div className="user-info">
          Something wrong...<button onClick={resetUserId}>Reset</button>
        </div>
      );
    case "hasValue":
      return (
        <>
          <div className="user-info">
            <label>사용자 ID:</label>
            <select
              className="user--id"
              value={userId}
              onChange={onSelectChange}
            >
              {Array(11)
                .fill("")
                .map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
            </select>
            <div className="user--name">{userNameLoadable.contents}</div>
          </div>
          <p style={{ textAlign: "right", margin: 0 }}>
            User ID '11' will be throw asynchronous error
          </p>
        </>
      );
  }
};

export default UserInfo;
