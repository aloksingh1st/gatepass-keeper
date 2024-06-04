import React, { useState } from "react";
import QRCode from "qrcode.react";
import { ImCancelCircle } from "react-icons/im";

const QRCodeGenerator = ({ text, setOff}) => {
  return (
    <div
      className="flex absolute h-screen m-auto  justify-center w-full items-center flex-col md:w-[24%]"
      style={{ zIndex: 20 }}
    >
      {text && (
        <div
          className="relative flex items-center flex-col rounded-[8px]"
          style={{
            boxShadow:
              "0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* <h2>QR Code:</h2> */}

          <ImCancelCircle
            className="float-right absolute right-0 m-2 cursor-pointer"
            onClick={setOff}
            style={{ background: " var(--grey-medium, #E5E5E5)" }}
          />
          <QRCode value={text} className="w-[60%] my-5" />
          <h2 className="text-[16px] px-4 pb-3">Please let the keeper scan this QR</h2>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
