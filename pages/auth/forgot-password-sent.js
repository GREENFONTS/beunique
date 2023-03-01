import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ForgotPasswordSent = () => {

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

          <section className="w-full my-8 flex flex-col items-center">
            <h3 className="text-[24px] font-bold text-center w-full font-anybody">Help is on the way!</h3>

            <p className="font-inter text-[16px] text-[#344054] w-full text-center mt-4">
              If you have a Beunique account, we&apos;ve just sent you an email
              containing a link to reset your password. If you did not receive
              an email, it means that either you don&apos;t have an account or
              it ended up in your spam folder
            </p>

            <Link href="/signin" className="w-full md:w-[70%] mt-10 block mx-auto">
              <button
                type="submit"
                className="w-full bg-black text-[#fcfcfd] p-[16px] rounded-lg cursor-pointer duration-300"
              >
                Back to Login
              </button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default ForgotPasswordSent;
