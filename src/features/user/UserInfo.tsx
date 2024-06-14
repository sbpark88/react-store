import React, { useCallback, useEffect, useState } from "react";
import "./UserInfo.css";
import { useUserInfoStore } from "./userInfoStore";

const promiseState = ["loading", "hasError", "hasValue"] as const;
type PromiseState = (typeof promiseState)[number];

const UserInfo: React.FC = () => {
  const [promiseState, setPromiseState] = useState<PromiseState>("loading");
  const [userName, setUserName] = useState("");
  const { userId, setUserId, getCurrentUserName, reset } = useUserInfoStore();

  const onSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserId(parseInt(event.target.value));
    },
    [setUserId],
  );

  useEffect(() => {
    setPromiseState("loading");
    getCurrentUserName()
      .then((name) => {
        setUserName(name);
        setPromiseState("hasValue");
      })
      .catch((error) => setPromiseState("hasError"));
  }, [userId]);

  switch (promiseState) {
    case "loading":
      return <div className="user-info">Loading...</div>;
    case "hasError":
      return (
        <div className="user-info">
          Something wrong...
          <button onClick={reset}>Reset</button>
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
            <div className="user--name">{userName}</div>
          </div>
          <p style={{ textAlign: "right", margin: 0 }}>
            User ID '11' will be throw asynchronous error
          </p>
        </>
      );
  }
};

export default UserInfo;
