import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "@/public/logo.png";
import {
  I3Dcube,
  DocumentUpload,
  ShoppingCart,
  Setting2,
  LogoutCurve,
  ArrowLeft,
  ArrowRight,
  ClipboardExport,
  Filter,
} from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AdminOverview = () => {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <Head>
        <title>BeUnique | Admin</title>
        <meta
          name="description"
          content="The most unique and affordable ecommerce store for females"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-w-[1200px] w-full h-full mx-auto block p-[16px] md:px-[40px] md:py-[20px] relative font-inter overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
        {token ? (
          <>
            <section className="w-[20%] min-h-full fixed top-0 left-0 flex flex-col items-start justify-start pl-[30px] pt-[30px] pb-[30px]">
              <section className="w-fit flex items-end">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="BeUnique"
                    width={164}
                    height={32}
                    className="w-[164px] h-[32px]"
                  />
                </Link>
                <span className="text-[12px] text-[#101828] ml-2">Admin</span>
              </section>

              <section className="w-full h-[500px] mt-10 flex flex-col items-start justify-between border-r-[1.5px] border-r-[#eaecf0]">
                <section className="w-full h-[300px] flex flex-col space-y-3 pr-[30px]">
                  <Link href="/admin">
                    <button
                      type="button"
                      class="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <I3Dcube size={20} className="mr-3" />
                      Overview
                    </button>
                  </Link>
                  <Link href="admin/upload">
                    <button
                      type="button"
                      class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <DocumentUpload size={20} className="mr-3" />
                      Upload
                    </button>
                  </Link>
                  <Link href="admin/orders">
                    <button
                      type="button"
                      class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <ShoppingCart size={20} className="mr-3" />
                      Orders
                    </button>
                  </Link>
                  <Link href="admin/settings">
                    <button
                      type="button"
                      class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                    >
                      <Setting2 size={20} className="mr-3" />
                      Settings
                    </button>
                  </Link>
                </section>

                <button
                  type="button"
                  class="px-6 py-2.5 bg-[#fbe7e7] text-[#d2120f] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center w-[200px]"
                  onClick={() => {
                    logoutHandler();
                    router.reload(window.location.pathname);
                  }}
                >
                  <LogoutCurve size={20} className="mr-3" />
                  Logout
                </button>
              </section>
            </section>

            <section className="fixed top-0 right-0 w-[78%] h-full pt-[30px] pr-[30px] pb-[30px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
              <section className="w-full h-full">
                <section className="w-full grid place-items-center grid-cols-4 divide-x mt-12">
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total Sales
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      ₦{priceFormatter(234199)}
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total units sold
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      134
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total Orders
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      122
                    </h2>
                  </section>
                  <section className="grid place-items-center w-full">
                    <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                      Total category
                    </h4>
                    <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                      6
                    </h2>
                  </section>
                </section>

                <section className="w-full mt-8 flex flex-col items-center space-y-4">
                  <section className="w-full flex items-start justify-between">
                    <h4 className="font-inter font-bold text-[20px] text-black">
                      Stock
                    </h4>
                    <section className="flex items-center">
                      <button
                        type="button"
                        class="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center border-[1px] border-[#eaecf0] mr-4"
                        onClick={() => alert("Exporting list...")}
                      >
                        <ClipboardExport size={20} className="mr-3" />
                        Export list
                      </button>
                      <button
                        type="button"
                        class="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center"
                        onClick={() => alert("Filtering stock...")}
                      >
                        <Filter size={20} className="mr-3" />
                        Filter
                      </button>
                    </section>
                  </section>

                  <section className="bg-red-200 w-full grid place-items-center py-16">
                    Table of Stocks
                  </section>
                  <section className=""></section>
                </section>
              </section>
            </section>
          </>
        ) : (
          <section className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="font-anybody font-bold text-3xl text-[#344054]">
              Please login to access your account!
            </h1>

            <Link href="/signin">
              <button
                type="button"
                className="px-2 py-2.5 mt-6 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex items-center justify-center w-[150px] h-[42px]"
              >
                Login
              </button>
            </Link>
          </section>
        )}
      </section>
    </>
  );
};

export default AdminOverview;
