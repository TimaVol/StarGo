import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../common";
import { UserT } from "../common/types";
import "../styles/components/User.scss";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState<UserT>();
  const [error, setError] = useState<Error>();
  
  useEffect(() => {
    client
      .get(`/get/${id}`)
      .then((res) => setUser(res.data.data))
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) return <h3 className="error">Error: {error.message}</h3>;

  return (
    <>
      <h1 className="mainTitle">User</h1>

      {user ? (
        <div className="userInfo">
          <p className="row">First name: {user?.firstName}</p>
          <p className="row">Last name: {user?.lastName}</p>
          <p className="row">Age: {user?.age}</p>
          <p className="row">Gender: {user?.gender}</p>
          <p className="row">Country: {user?.country}</p>
        </div>
      ) : (
        <p>...loading</p>
      )}
    </>
  );
}
