import { useEffect, useState } from "react";
import { client } from "../common";
import UserRow from "../components/UserRow";

export default function Users() {
  const [usersId, setUsersId] = useState<number[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    client
      .get(`/list`)
      .then((res) => setUsersId(res.data.data))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return <h3 className="error">Error: {error.message}</h3>;

  return (
    <>
      <h1 className="mainTitle">Users</h1>
      {usersId?.map((id) => (
        <UserRow key={Math.random()} id={id} />
      ))}
    </>
  );
}
