import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../common";
import "../styles/App.scss";

export default function UserRow({ id }: { id: number }) {
  const [firstName, setFirstName] = useState<string>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    client
      .get(`/get/${id}`)
      .then((res) => setFirstName(res.data.data.firstName))
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) return <p className="row error">Error: {error.message}</p>;

  return (
    <>
      {firstName ? (
        <Link to={"/" + id} className="row">
          <div>{firstName}</div>
        </Link>
      ) : (
        <p className="row">...loading</p>
      )}
    </>
  );
}
