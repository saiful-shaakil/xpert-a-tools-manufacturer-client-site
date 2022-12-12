import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    const token = localStorage.getItem("accessToken");
    if (email) {
      fetch(
        `https://xpert-tools-manufacturer-server-site.onrender.com/admin/${email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setIsLoading(false);
        });
    }
  }, [user]);
  return [admin, isLoading];
};
export default useAdmin;
