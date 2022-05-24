import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      const userDetails = {
        mail: email,
        name: user?.user?.displayName,
        admin: false,
        role: "user",
        img: user?.user?.photoURL,
      };
      fetch(`http://localhost:5000/add-user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.token);
          const token = data.token;
          localStorage.setItem("accessToken", token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
