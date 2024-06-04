import React from "react";
import { IoIosNotifications } from "react-icons/io";
import QRScanner from "../../components/keeper/QrScanner";
import Link from "next/link";
import Footer from "@/components/keeper/Footer";
import Image from "next/image";

const KeeperReq = () => {
  return (
    <div className="md:w-[25%] h-screen m-auto justify-center items-center block">
      <div
        className="flex justify-around items-center w-full py-4 "
        style={{ boxShadow: "0px 3px 6px 0px rgba(48, 48, 48, 0.10)" }}
      >
        <div className="w-[50px] h-[50px] rounded-[25px] flex overflow-clip">
          <Image
            src={"/graphics/profile.jpg"}
            height={50}
            width={50}
            alt="profile"
          />
        </div>
        <h2 className="text-[20px] font-semibold">👋</h2>

        <Link href="/user/notifications">
          <IoIosNotifications className="text-[25px]" />
        </Link>
      </div>

      <div className="w-full flex m-auto justify-center items-center">
        <QRScanner />
      </div>
      <Footer place="requests" />
    </div>
  );
};

export default KeeperReq;
