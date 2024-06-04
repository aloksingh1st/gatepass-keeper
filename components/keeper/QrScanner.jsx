import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import { useRouter } from "next/router";

const Example = () => {
  const router = useRouter();
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result.data}</p>
    </>
  );
};

export default Example;
