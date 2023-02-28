import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link";
import main_hero5a from "../public/page_imgs/main_hero5a.jpg";
import main_hero5b from "../public/page_imgs/main_hero5b.jpg";
import main_hero5c from "../public/page_imgs/main_hero5c.jpg";
import main_hero5d from "../public/page_imgs/main_hero5d.jpg";

import { useAppContext } from "@/context/AppContext";
import { Footer, Header, NewStockSlider, SalesCountdown } from "@/components";
import { useState } from "react";

export default function Home() {
  const [salesTimerOn, setSalesTimerOn] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      await fetch(
        "https://beunique.live/users/newsletter-subscription",
        options
      )
        .then((res) => res.json())
        .then((resData) => {
          const res = resData.detail;

          if (res.includes("Email was successfully added to our Newsletter")) {
            toast.success(res);
            reset();
          } else {
            toast.error(res);
          }
        });
    } catch (err) {
      console.log(err);
      // toast.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>BeUnique | Unique & Affordable</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="w-full flex flex-col items-center justify-center p-0 m-0 z-30 font-inter scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        {salesTimerOn && <SalesCountdown />}

        <section className="w-full p-5 py-32 m-0 grid place-items-center bg-home_hero bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="mx-auto w-[95%] sm:w-[80%] sm3:w-[60%] flex flex-col items-center md:grid md:place-items-center text-center">
            <h1 className="font-bold text-[60px] font-anybody">
              shop for unique and affordable outfits
            </h1>
            <p className="mt-2 mb-6 text-[24px] font-inter">
              Buy quality and well fitted female outfits with a large variety of
              categories at affordable price
            </p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 text-[20px] font-semibold font-inter"
            >
              Start shopping
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-16 m-0 flex flex-col items-center bg-home_hero2 bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right sm2:mr-32">
            <h2 className="font-bold text-[48px] font-anybody">
              New <br />
              Season <br />
              slaying
            </h2>
            <p className="mt-3 mb-6 font-inter">
              Starting at{" "}
              <span className="text-[18px] font-semibold">₦10, 000</span>
            </p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 w-fit text-[20px] font-semibold font-inter"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-5 py-16 pr-16 m-0 flex flex-col items-end bg-home_hero3 bg-no-repeat bg-cover bg-center text-white dark:text-white">
          <section className="w-[70%] sm2:w-[40%] flex flex-col items-end text-right sm2:mr-36">
            <h2 className="font-bold text-[48px] font-anybody">Short Dress</h2>
            <p className="mt-3 mb-6 font-inter">
              Starting at{" "}
              <span className="text-[18px] font-semibold">₦10, 000</span>
            </p>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 text-[20px] font-semibold font-inter"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-col sm2:flex-row items-center justify-center text-white dark:text-white sm2:h-[400px] flex-wrap">
          <section className="w-[100%] sm2:w-[50%] p-5 py-16 sm2:py-10 m-0 sm2:flex sm2:flex-col sm2:items-center sm2:justify-end bg-home_hero4a bg-no-repeat bg-cover bg-center text-white dark:text-white h-full text-center">
            <h2 className="text-[36px] font-bold font-anybody mb-6">
              Amazing Jumpsuits
            </h2>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 text-[20px] font-semibold font-anybody"
            >
              Shop Now
            </Link>
          </section>

          <section className="w-[100%] sm2:w-[50%] p-5 py-16 sm2:py-10 m-0 flex flex-col items-center justify-center sm2:justify-end bg-home_hero4b bg-no-repeat bg-cover bg-center text-white dark:text-white h-full">
            <h2 className="text-[36px] font-bold font-anybody mb-6 text-center">
              Shop for exquisite long gowns
            </h2>
            <Link
              href="/"
              className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 border-0 outline-none focus:outline-none rounded-md cursor-pointer duration-300 text-[20px] font-semibold font-anybody"
            >
              Shop Now
            </Link>
          </section>
        </section>

        <section className="w-full p-0 m-0 flex flex-row flex-wrap items-center justify-between text-white dark:text-white space-y-2 sm3:space-y-0">
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Link href="/">
              <Image src={main_hero5a} alt="Beunique Product" />
              <button className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full">
                Shop Short Gowns
              </button>
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Link href="/">
              <Image src={main_hero5b} alt="Beunique Product" />
              <button className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full">
                Shop Two Piece
              </button>
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Link href="/">
              <Image src={main_hero5c} alt="Beunique Product" />
              <button className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full">
                Shop Jumpsuit
              </button>
            </Link>
          </section>
          <section className="w-[48%] sm3:w-[24%]  grid place-items-center text-center">
            <Link href="/">
              <Image src={main_hero5d} alt="Beunique Product" />
              <button className="bg-black text-white hover:text-[#ACB2BE] px-4 py-1 border-0 outline-none focus:outline-none cursor-pointer duration-300 w-full">
                Shop Long Gown
              </button>
            </Link>
          </section>
        </section>

        <section className="w-[95%] p-5 m-0 my-6 flex flex-col items-start">
          <h2 className="text-[24px] font-anybody font-semibold text-left mb-3">
            New Stock
          </h2>

          <NewStockSlider />
        </section>

        <section className="w-[100%] bg-[#f2f4f7] overflow-hidden flex flex-col space-y-4 py-8 items-center justify-center sm2:flex-row sm2:flex-wrap sm2:justify-between sm2:px-6">
          <section className="w-[90%] sm2:w-[45%]">
            <h3 className="font-semibold text-xl mb-3">
              Scared of missing out?
            </h3>
            <p className="text-[14px]">
              We&apos;ll send you a mail whenever any offer or new stock is
              available
            </p>
          </section>

          <section className="w-[90%] sm2:w-[48%] flex justify-end">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-between"
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                // value={searchInput}
                // onChange={(e) => setSearchInput(e.target.value)}
                {...register("email", { required: true })}
                className="w-[100%] placeholder-[#ACB2BE] outline-none hover:outline-none focus:outline-none text-black border-[1px] border-[#ACB2BE] bg-white rounded-md px-4 py-2"
              />
              <button className="bg-black hover:bg-white text-white hover:text-black px-4 py-2 border-0 outline-none focus:outline-none hover:border-[1px] hover:border-[#ACB2BE] rounded-md cursor-pointer duration-300 md:ml-6 w-full md:w-fit mt-2 md:mt-0">
                Subscribe
              </button>
            </form>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
}
