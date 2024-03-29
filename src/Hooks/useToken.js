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
          "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      };
      fetch(
        `https://xpert-tools-manufacturer-server-site.onrender.com/add-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      )
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
