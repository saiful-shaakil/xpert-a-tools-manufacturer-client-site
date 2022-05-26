import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      const userDetails = {
        mail: email,
        name: user?.user?.displayName || "New User",
        img:
          user?.user?.photoURL ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      };
      fetch(`https://still-mesa-94038.herokuapp.com/add-user/${email}`, {
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
