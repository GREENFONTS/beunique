import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Eye, EyeSlash } from "iconsax-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { SignInApi } from "@/redux/axios/apis/auth";
import ErrorHandler from "@/redux/axios/Utils/ErrorHandler";
import { dispatch } from "@/redux/store";
import { EmailSignIn } from "@/redux/features/auth/services";

const Signin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = async () => {
    try {
      const formBody = new FormData();

      formBody.append("username", username);
      formBody.append("password", password);
      const res = await SignInApi(formBody);

      dispatch(EmailSignIn(res.data));
      toast.success("Signed in successfully");

      // if (referringUrl.includes("/auth/signin") === false) {
      //   console.log("/")
      //   router.push(referringUrl);
      // } else {

      router.push("/");
      // }
    } catch (err) {
      const error = ErrorHandler(err);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>BeUnique | Sign In</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-screen h-auto block p-[16px] md:p-[40px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        <section className="w-full sm2:w-[70%] md3:w-[40%] mt-[8vh] mx-auto flex flex-col items-center relative">
          <section className="w-fit">
            <Link href="/">
              <Image
                src={Logo}
                alt="BeUnique"
                width={288}
                height={56}
                className="w-[206px] h-[40px] md:w-[288px] md:h-[56px]"
              />
            </Link>
          </section>

          <section className="w-full my-8 flex flex-col items-center space-y-6">
            <h3 className="text-[18px] font-bold text-left w-full">Sign In</h3>

            <div className="w-full flex flex-col items-center my-0">
              <label
                htmlFor="email"
                className="w-full rounded-lg border-[1px] border-[#d0d5dd]"
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="username"
                  value={username}
                  className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>

              <label
                htmlFor="password"
                className="w-full rounded-lg border-[1px] border-[#d0d5dd] relative mt-4"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={password}
                  id="password"
                  name="password"
                  className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <Eye
                    size={20}
                    className="text-[#344054] absolute top-[50%] -translate-y-[50%] right-[16px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <EyeSlash
                    size={20}
                    className="text-[#344054] absolute top-[50%] -translate-y-[50%] right-[16px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </label>

              <p className="font-inter text-[16px] text-[#344054] mt-4 mb-10 w-full text-right">
                <Link href="/forgot-password">Forgot password</Link>
              </p>
              <button
                onClick={() => onSubmit()}
                className="w-full bg-black text-[#fcfcfd] p-[16px] rounded-lg cursor-pointer duration-300"
              >
                Sign In
              </button>
            </div>
          </section>

          <section className="w-full flex flex-col items-center text-center space-y-8">
            <p className="font-inter text-[16px] text-[#344054]">
              Don&apos;t have an account?{" "}
              <span className="font-bold">
                <Link href="/auth/signup">Create account</Link>
              </span>
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Signin;

export async function getServerSideProps({ req }) {
  const referringUrl = req.headers.referer ? req.headers.referer : null;
  return {
    props: { referringUrl },
  };
}
