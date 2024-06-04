import Image from "next/image";
import React, { useState } from "react";
import QRCodeGenerator from "../user/qrGenerator";

const UserCard = (props, { allowed }) => {
  const [showQr, setShowQr] = useState(false);
  const qrText = btoa(JSON.stringify(props));


  const convertDate = (timeInSeconds) => {
    const date = new Date(timeInSeconds * 1000); // Convert seconds to milliseconds
    const formattedDate = date.toLocaleString();

    return formattedDate;
  }

  const setOff = () => {
    setShowQr(false);
  }

  return (
    <>
      {
        showQr && (
          <div className="container">
            <QRCodeGenerator text={qrText} setOff={setOff} />
          </div>
        )
      }
      <div
        className="flex px-4 mt-4 w-[353px] m-auto justify-around items-center h-[66px] rounded-[10px] border-2 border-[#E0E0E0]"
        onClick={(e) => {
          props.allowed ? setShowQr(true) : console.log("NOt");
        }}
      >
        <div className="wrapper flex">
          <Image
            className="rounded-[50%] mx-3"
            src={"/graphics/profile.jpg"}
            height={50}
            width={50}
            alt="profile"
          />

          <div className="flex flex-col justify center mt-1 items-center">
            <h2 className="text-[#303030] text-[10px] items-center font-semibold">
              {props.displayName}
            </h2>
            <h2 className="text-[#303030] text-[9px] items-center ">
              {props.course}({props.branch})
            </h2>
          </div>
        </div>

        <div className="tab px-3 text-[10px]">
          <span>{convertDate(props?.From?.seconds)}</span> <br />
          <span> {convertDate(props?.To?.seconds)}</span>
        </div>
        {props.allowed ? (
          <h1 className="text-[#2d732d] font-semibold">Allowed</h1>
        ) : (
          <h1 className="text-[#973131] font-semibold">Pending</h1>
        )}
      </div>
    </>
  );
};

export default UserCard;
