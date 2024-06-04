import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import Footer from "@/components/keeper/Footer";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";

const Newrequest = () => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const signOut = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    alert(token);
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div className="md:w-[25%] h-screen m-auto justify-center items-center block">
        <div className="h-[90%] overflow-y-scroll">
          <div
            className="flex justify-around items-center w-full py-4"
            style={{ boxShadow: "0px 3px 6px 0px rgba(48, 48, 48, 0.10)" }}
          >
            <h2 className="text-[20px] font-semibold">Profile</h2>

            <Link href="/user/notifications">
              <IoIosNotifications className="text-[25px]" />
            </Link>
          </div>

          <div className="pt-4 m-auto flex text-center px-5 items-center">
            <div className="w-[80px] h-[80px] rounded-[40px] flex overflow-clip">
              <Image
                src={"/graphics/profile.jpg"}
                height={80}
                width={80}
                alt="profile"
              />
            </div>

            <div className="text-container px-5 text-start">
              <p className="text-[#303030] text-[18px]">Hey,</p>
              {/* <h2 className="text-[#303030] text-[24px]">{authUser?.username}👋</h2> */}
            </div>
          </div>

          <div className="con pt-16">
            <Link href="/user/editProfile">
              <div className="w-[353px] px-5 flex justify-between  items-center">
                <div className="flex items-center">
                  <BsFillPersonFill className="text-[30px] text-[rgb(57,0,80)]" />

                  <h2 className="px-10">Edit Profile</h2>
                </div>
                <div className="svg-container text-[24px] items-center">
                  <svg
                    className="font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.645917 0.645994C0.692363 0.59943 0.747538 0.562487 0.808283 0.537281C0.869028 0.512075 0.93415 0.4991 0.999917 0.4991C1.06568 0.4991 1.13081 0.512075 1.19155 0.537281C1.2523 0.562487 1.30747 0.59943 1.35392 0.645994L7.35392 6.64599C7.40048 6.69244 7.43742 6.74761 7.46263 6.80836C7.48783 6.8691 7.50081 6.93423 7.50081 6.99999C7.50081 7.06576 7.48783 7.13088 7.46263 7.19163C7.43742 7.25237 7.40048 7.30755 7.35392 7.35399L1.35392 13.354C1.26003 13.4479 1.13269 13.5006 0.999917 13.5006C0.867141 13.5006 0.739804 13.4479 0.645917 13.354C0.55203 13.2601 0.499285 13.1328 0.499285 13C0.499285 12.8672 0.55203 12.7399 0.645917 12.646L6.29292 6.99999L0.645917 1.35399C0.599354 1.30755 0.562411 1.25237 0.537204 1.19163C0.511998 1.13088 0.499023 1.06576 0.499023 0.999994C0.499023 0.934226 0.511998 0.869105 0.537204 0.80836C0.562411 0.747615 0.599354 0.692439 0.645917 0.645994Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <hr
              className="w-[299px] m-auto mt-3 h-[1.5px] mb-6"
              style={{
                background:
                  "linear-gradient(0deg, #E0E0E0 0%, #E0E0E0 100%), #DF5532",
              }}
            />

            <Link href="/user/changePassword">
              <div className="w-[353px] px-5 flex justify-between  items-center">
                <div className="flex items-center">
                  <RiLockPasswordFill className="text-[30px] text-[rgb(57,0,80)]" />

                  <h2 className="px-10">Change Password</h2>
                </div>
                <div className="svg-container text-[24px] items-center">
                  <svg
                    className="font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.645917 0.645994C0.692363 0.59943 0.747538 0.562487 0.808283 0.537281C0.869028 0.512075 0.93415 0.4991 0.999917 0.4991C1.06568 0.4991 1.13081 0.512075 1.19155 0.537281C1.2523 0.562487 1.30747 0.59943 1.35392 0.645994L7.35392 6.64599C7.40048 6.69244 7.43742 6.74761 7.46263 6.80836C7.48783 6.8691 7.50081 6.93423 7.50081 6.99999C7.50081 7.06576 7.48783 7.13088 7.46263 7.19163C7.43742 7.25237 7.40048 7.30755 7.35392 7.35399L1.35392 13.354C1.26003 13.4479 1.13269 13.5006 0.999917 13.5006C0.867141 13.5006 0.739804 13.4479 0.645917 13.354C0.55203 13.2601 0.499285 13.1328 0.499285 13C0.499285 12.8672 0.55203 12.7399 0.645917 12.646L6.29292 6.99999L0.645917 1.35399C0.599354 1.30755 0.562411 1.25237 0.537204 1.19163C0.511998 1.13088 0.499023 1.06576 0.499023 0.999994C0.499023 0.934226 0.511998 0.869105 0.537204 0.80836C0.562411 0.747615 0.599354 0.692439 0.645917 0.645994Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <hr
              className="w-[299px] m-auto mt-3 h-[1.5px] mb-6"
              style={{
                background:
                  "linear-gradient(0deg, #E0E0E0 0%, #E0E0E0 100%), #DF5532",
              }}
            />

            <Link href="/user/editProfile">
              <div className="w-[353px] px-5 flex justify-between  items-center">
                <div className="flex items-center">
                  <HiInformationCircle className="text-[30px] text-[rgb(57,0,80)]" />

                  <h2 className="px-10">About</h2>
                </div>
                <div className="svg-container text-[24px] items-center">
                  <svg
                    className="font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.645917 0.645994C0.692363 0.59943 0.747538 0.562487 0.808283 0.537281C0.869028 0.512075 0.93415 0.4991 0.999917 0.4991C1.06568 0.4991 1.13081 0.512075 1.19155 0.537281C1.2523 0.562487 1.30747 0.59943 1.35392 0.645994L7.35392 6.64599C7.40048 6.69244 7.43742 6.74761 7.46263 6.80836C7.48783 6.8691 7.50081 6.93423 7.50081 6.99999C7.50081 7.06576 7.48783 7.13088 7.46263 7.19163C7.43742 7.25237 7.40048 7.30755 7.35392 7.35399L1.35392 13.354C1.26003 13.4479 1.13269 13.5006 0.999917 13.5006C0.867141 13.5006 0.739804 13.4479 0.645917 13.354C0.55203 13.2601 0.499285 13.1328 0.499285 13C0.499285 12.8672 0.55203 12.7399 0.645917 12.646L6.29292 6.99999L0.645917 1.35399C0.599354 1.30755 0.562411 1.25237 0.537204 1.19163C0.511998 1.13088 0.499023 1.06576 0.499023 0.999994C0.499023 0.934226 0.511998 0.869105 0.537204 0.80836C0.562411 0.747615 0.599354 0.692439 0.645917 0.645994Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <hr
              className="w-[299px] m-auto mt-3 h-[1.5px] mb-6"
              style={{
                background:
                  "linear-gradient(0deg, #E0E0E0 0%, #E0E0E0 100%), #DF5532",
              }}
            />
            <div onClick={signOut} className="cursor-pointer">
              <div className="w-[353px] px-5 flex justify-between  items-center">
                <div className="flex items-center">
                  <AiOutlineLogout className="text-[30px] text-[rgb(57,0,80)]" />

                  <h2 className="px-10">Log out</h2>
                </div>
                <div className="svg-container text-[24px] items-center">
                  <svg
                    className="font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.645917 0.645994C0.692363 0.59943 0.747538 0.562487 0.808283 0.537281C0.869028 0.512075 0.93415 0.4991 0.999917 0.4991C1.06568 0.4991 1.13081 0.512075 1.19155 0.537281C1.2523 0.562487 1.30747 0.59943 1.35392 0.645994L7.35392 6.64599C7.40048 6.69244 7.43742 6.74761 7.46263 6.80836C7.48783 6.8691 7.50081 6.93423 7.50081 6.99999C7.50081 7.06576 7.48783 7.13088 7.46263 7.19163C7.43742 7.25237 7.40048 7.30755 7.35392 7.35399L1.35392 13.354C1.26003 13.4479 1.13269 13.5006 0.999917 13.5006C0.867141 13.5006 0.739804 13.4479 0.645917 13.354C0.55203 13.2601 0.499285 13.1328 0.499285 13C0.499285 12.8672 0.55203 12.7399 0.645917 12.646L6.29292 6.99999L0.645917 1.35399C0.599354 1.30755 0.562411 1.25237 0.537204 1.19163C0.511998 1.13088 0.499023 1.06576 0.499023 0.999994C0.499023 0.934226 0.511998 0.869105 0.537204 0.80836C0.562411 0.747615 0.599354 0.692439 0.645917 0.645994Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr
              className="w-[299px] m-auto mt-3 h-[1.5px] mb-6"
              style={{
                background:
                  "linear-gradient(0deg, #E0E0E0 0%, #E0E0E0 100%), #DF5532",
              }}
            />
            {/* width: 299px;
height: 1px; */}
          </div>
          {/* <div>
            <form action="">
              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Roll No
                </label>
                <input
                  type="text"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Course
                </label>
                <input
                  type="text"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Year
                </label>
                <input
                  type="text"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                />
              </div>

              <div className="input-form flex flex-col">
                <label
                  htmlFor="timePicker"
                  className="text-[#303030] pl-5 pt-5"
                >
                  From
                </label>
                <input
                  type="time"
                  id="timePicker"
                  name="time"
                  placeholder="Select a time"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              </div>

              <div className="input-form flex flex-col">
                <label
                  htmlFor="timePicker"
                  className="text-[#303030] pl-5 pt-5"
                >
                  To
                </label>
                <input
                  type="time"
                  id="timePicker"
                  name="time"
                  placeholder="Select a time"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              </div>

              <div className="input-form flex pt-5 flex-col">
                <input
                  type="submit"
                  value="Save Changes"
                  className="w-[350px] m-auto h-[53px] rounded-[5px] border-2 border-[#E0E0E0] text-white bg-[rgb(57,0,80)]"
                />
              </div>
            </form>
          </div> */}
        </div>

        <Footer place={"profile"} />
      </div>
    </>
  );
};

export default Newrequest;
