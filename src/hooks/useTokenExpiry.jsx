import { decodeJwt } from "jose";
import { useEffect } from "react";
export default function useTokenExpiry(token) {

  useEffect(() => {
    if (token) {
      const expirtyInterval = setInterval(() => {
        try {
          const tokenExpired = Date.now() > decodeJwt(token).exp * 1000;
          if (tokenExpired) {
            window.location.reload()
          }
        } catch (err) {
          console.error("Error decoding JWT:", err);

          window.location.reload()
        }

        console.log("checking token");
      }, 1000);

      return () => {
        clearInterval(expirtyInterval);
      };
    }
  }, [token]);

}
