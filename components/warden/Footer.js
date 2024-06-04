import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Footer = ({ place = "home" }) => {
  const router = useRouter();
  const handleClick = (e, value) => {
    e.preventDefault();
    // setPlace(value);
  };
  return (
    <>
      <div className="z-30">
        <div
          className="fixed bottom-2 w-full bg-white flex m-auto justify-center items-center h-[60px] md:w-[25%] z-20 pb-[20px]"
          style={{
            borderRadius: "20px 20px 0px 0px",
            boxShadow: "0px -3px 6px 0px rgba(48, 48, 48, 0.10)",
          }}
        >
          <div className="flex items-center justify-around mt-8 w-full ">
            <Link
              href={"/warden"}
              className={`py-3 px-4 rounded-lg ${
                place == "home" ? "bg-[rgb(57,0,80)]" : null
              }`}
            >
              <AiOutlineHome
                className={`${
                  place == "home" ? "text-[1rem] text-white" : "text-[1.5rem]"
                }`}
              />
            </Link>

            <Link
              href={"/warden/requests"}
              className={`py-3 px-4 rounded-lg ${
                place == "requests" ? "bg-[rgb(57,0,80)]" : null
              }`}
            >
              <AiOutlinePlusCircle
                className={`${
                  place == "requests"
                    ? "text-[1rem] text-white"
                    : "text-[1.5rem]"
                }`}
              />
            </Link>

            <Link
              href={"/warden"}
              className={`py-3 px-4 rounded-lg ${
                place == "admin" ? "bg-[rgb(57,0,80)]" : null
              }`}
            >
              <MdOutlineAdminPanelSettings
                className={`${
                  place == "admin" ? "text-[1rem] text-white" : "text-[1.5rem]"
                }`}
              />
            </Link>

            <Link
              href={"/warden/profile"}
              className={`py-3 px-4 rounded-lg ${
                place == "profile" ? "bg-[rgb(57,0,80)]" : null
              }`}
            >
              <CgProfile
                className={`${
                  place == "profile"
                    ? "text-[1rem] text-white"
                    : "text-[1.5rem]"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
