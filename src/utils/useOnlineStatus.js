import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {});

      window.removeEventListener("online", () => {});
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
