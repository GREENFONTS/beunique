import { setToken } from "@/redux/features/auth/authSlice";
import { dispatch } from "@/redux/store";
import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const useSessionStorage = (name) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      setValue(sessionStorage.getItem(name));
    }, []);

    return value;
  };
  dispatch(setToken(useSessionStorage("token")));

  return (
    <section className="bg-white dark:bg-white text-black dark:text-black w-[100%] min-w-[320px] overflow-hidden">
      <main className="">{children}</main>
    </section>
  );
};

export default Layout;
