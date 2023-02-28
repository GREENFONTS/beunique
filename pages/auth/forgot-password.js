import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/forgot-password-sent");
  };
  // console.log(errors);

  return (
    <>
      <Head>
        <title>BeUnique | Forgot Password</title>
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
            <p className="font-inter text-[16px] text-[#344054] w-full text-center">
              Please enter your Beunique account email below, and we&apos;ll
              send you an email to reset your password.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center space-y-4"
            >
              <label
                htmlFor="email"
                className="w-full rounded-lg border-[1px] border-[#d0d5dd]"
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full p-[16px] rounded-lg placeholder:text-[16px] placeholder:text-[#344054] font-medium outline-none border-none bg-white"
                  {...register("email", { required: true })}
                />
              </label>

              <button
                type="submit"
                className="w-full bg-black text-[#fcfcfd] p-[16px] rounded-lg cursor-pointer duration-300"
              >
                Send
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default ForgotPassword;
