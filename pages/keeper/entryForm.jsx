// import React, { useEffect, useState } from "react";

// import { IoIosNotifications } from "react-icons/io";
// import QRScanner from "../../components/keeper/QrScanner";
// import Link from "next/link";
// import Footer from "@/components/keeper/Footer";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import {
//   collection,
//   addDoc,
 
// } from "firebase/firestore";

// import { db } from "../../config/firebaseConfig";
// import Loader from "../../components/common/Loader";

// const EntryForm = () => {
//   const router = useRouter();
//   const [to, setTo] = useState("");
//   const [from, setFrom] = useState("");
//   const [name, setName] = useState("");
//   const [branch, setBranch] = useState("");
//   const [course, setCourse] = useState("");
//   const [rollNo, setRollNo] = useState("");
//   const [load, setLoad] = useState(false);

//   const { query } = router;
//   useEffect(() => {
//     if (query.q) {
//       setLoad(true)
//       const data = JSON.parse(atob(query.q));
//       console.log(data);
//       setBranch(data.branch);
//       setTo(data.To.seconds);
//       setFrom(data.From.seconds);
//       setName(data.displayName);
//       setRollNo(data.rollNo);
//       setCourse(data.course);
//       console.log(data.To);
//       setLoad(false);
//     }
//   }, []);

//   const updateProfile = async (e) => {
//     e.preventDefault();
//     setLoad(true);
//     try {
//       const dbRef = collection(db, "entries");
//       const studentData = {
//         displayName: name,
//         fromDate: from,
//         ToDate: to,
//         rollNo,
//         // Year,
//         branch,
//         course,
//       };
//       await addDoc(dbRef, studentData);
//       setLoad(false);
//       alert("Updated");
//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <>
//       {load ? (
//         <div className="auto">
//           <Loader />
//         </div>
//       ) : null }
//       <div className="md:w-[25%] h-screen m-auto justify-center items-center block">
//         <div
//           className="flex justify-around items-center w-full py-4 "
//           style={{ boxShadow: "0px 3px 6px 0px rgba(48, 48, 48, 0.10)" }}
//         >
//           <div className="w-[50px] h-[50px] rounded-[25px] flex overflow-clip">
//             <Image
//               src={"/graphics/profile.jpg"}
//               height={50}
//               width={50}
//               alt="profile"
//             />
//           </div>
//           {/* <h2 className="text-[20px] font-semibold">{authUser?.username} 👋</h2> */}

//           <Link href="/user/notifications">
//             <IoIosNotifications className="text-[25px]" />
//           </Link>
//         </div>
//         <div className="h-screen overflow-scroll">
//           <form action="" onSubmit={updateProfile}>
//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
//                 name=""
//                 id=""
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 Roll No
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
//                 name=""
//                 id=""
//                 value={rollNo}
//                 onChange={(e) => setRollNo(e.target.value)}
//               />
//             </div>

//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 Course
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
//                 name=""
//                 id=""
//                 value={course}
//                 onChange={(e) => setCourse(e.target.value)}
//               />
//             </div>

//             {/* <div className="input-form flex flex-col">
//                 <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 Year
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
//                   name=""
//                   id=""
//                   value={Year}
//                   onChange={(e) => setYear(e.target.value)}
//                   />
//                 </div> */}

//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 Branch
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)] px-2"
//                 name=""
//                 id=""
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//               />
//             </div>

//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 To
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)] px-2"
//                 name=""
//                 id=""
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//               />
//             </div>

//             <div className="input-form flex flex-col">
//               <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//                 From
//               </label>
//               <input
//                 type="text"
//                 className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)] px-2"
//                 name=""
//                 id=""
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//               />
//             </div>

//             <div className="input-form flex flex-col">
//               {/* <label htmlFor="" className="text-[#303030] pl-5 pt-5">
//               Branch
//             </label> */}

//               {/* <select
//                   value={role}
//                   onChange={handleDropdownChange}
//                   className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
//                   >
//                   <option value="">Choose a role</option>
//                   <option value="Hosteller">Hosteller</option>
//                   <option value="DayScholar">DayScholar</option>
//                   </select>
//                 */}
//             </div>

//             <div className="input-form flex pt-5 flex-col">
//               <input
//                 type="submit"
//                 value="Save Changes"
//                 className="w-[350px] m-auto h-[53px] rounded-[5px] border-2 border-[#E0E0E0] text-white bg-[rgb(57,0,80)]"
//               />
//             </div>
//           </form>
//         </div>
//         <Footer place="admin" />
//       </div>
//     </>
//   );
// };

// export default EntryForm;

import React from 'react'

const entryForm = () => {
  return (
    <div>entryForm</div>
  )
}

export default entryForm
