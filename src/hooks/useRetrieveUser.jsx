import { useEffect, useState } from "react";
import { decodeJwt } from "jose";
export default function useRetrieveUser() {
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token){
       
        try {
          const decodedToken = decodeJwt(token);
          const tokenExpired = Date.now() >= decodedToken.exp * 1000;
          if (!tokenExpired) {
            fetch("https://dummyjson.com/users/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                setUserData(data);
              });
          } else {
            setUserData(null);
            localStorage.clear();
          }
        } catch (err) {
          console.error(err);
          setUserData(null);
          localStorage.clear();
        }
    }
      }, []);

      return [userData, setUserData]

}
