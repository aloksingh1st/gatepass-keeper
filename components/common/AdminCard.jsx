import Image from "next/image";
import React, { useState } from "react";
import DetailReview from "./DetailReview";

const AdminCard = (props, { allowed }) => {
  const [showQr, setShowQr] = useState(false);

  const setOff = () => {
    setShowQr(false);
    props.funct();
  };

  return (
    <>
      {showQr && (
        <div className="container">
          <DetailReview uid={props.uid} setOff={setOff} />
        </div>
      )}
      <div
        className="flex px-4 mt-4 w-[353px] m-auto justify-around items-center h-[66px] rounded-[10px] border-2 border-[#E0E0E0]"
        onClick={(e) => {
          setShowQr(true);
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
            <h2 className="text-[#303030] text-[13px] items-center font-semibold">
              Emily
            </h2>
            <h2 className="text-[#303030] text-[10px] items-center ">
              B.Tech (IT)
            </h2>
          </div>
        </div>

        <div className="tab text-[10px]">
          <span>7-10-2023</span> To <span>7-10-2023</span>
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

export default AdminCard;
