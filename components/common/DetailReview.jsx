import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import Footer from "@/components/warden/Footer";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/context/AuthContext";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import {
  displaySuccessToast,
  uploadToFirebase,
} from "../../lib/exportableFunctions/index";
import { storage } from "../../config/firebaseConfig";
import { ImCancelCircle } from "react-icons/im";

const DetailReview = ({ uid, setOff }) => {
  const router = useRouter();

  const { authUser, isLoading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [Year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [ToDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [approve, setApprove] = useState();

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "requests"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((todo) => {
        console.log(todo.data());
        if (todo.data().displayName) {
          console.log(todo.data().displayName);
          setName(todo.data().displayName);
        }
        if (todo.data().course) {
          setCourse(todo.data().course);
        }

        if (todo.data().branch) {
          setBranch(todo.data().branch);
        }

        if (todo.data().rollNo) {
          setRollNo(todo.data().rollNo);
        }
        if (todo.data().Year) {
          setYear(todo.data().Year);
        }

        if (todo.data().email) {
          setEmail(todo.data().email);
        }

        if (todo.data().ToDate) {
          setToDate(todo.data().ToDate);
        }

        if (todo.data().fromDate) {
          setFromDate(todo.data().fromDate);
        }
      });

      // Set the todos state with the data array.
      // setTodos(data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };


  const approveHandler = async() => {
    try {
      // Get a reference to the todo document with the given ID in the "todos" collection in Firestore.
      const usersRef = doc(db, "requests", uid);

      // Update the "completed" field of the todo document to the value of the "checked" property of the event target.
      await updateDoc(usersRef, {
        approved:true,
      });
      
      setOff();
    } catch (error) {
      console.error("An error occured", error);
    }
  }


  const rejectHandler = async() => {
    try {
      // Get a reference to the todo document with the given ID in the "todos" collection in Firestore.
      const usersRef = doc(db, "requests", uid);
      await updateDoc(usersRef, {
        approved:false,
      });
      setOff();
    } catch (error) {
      console.error("An error occured", error);

    }
  }

  useEffect(() => {
    console.log(uid);
    if (uid) {
      fetchUserData();
    }
  }, [uid, fetchUserData]);

  const updateProfile = async (event) => {
    event.preventDefault();
    try {
      // Get a reference to the todo document with the given ID in the "todos" collection in Firestore.
      console.log(authUser.uid);
      const usersRef = doc(db, "users", authUser.uid);

      // Update the "completed" field of the todo document to the value of the "checked" property of the event target.
      await updateDoc(usersRef, {
        displayName: name,
        course: course,
        branch: branch,
        rollNo,
        Year,
      });

      fetchUserData(authUser.uid);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return (
    <>
      <div
        className="absolute w-full bg-white md:w-[25%]"
        style={{
          zIndex: 1000,
        }}
      >
        <div className="bg-white">
          <div
            className="w-full h-[10px]  relative cursor-pointer"
            onClick={setOff}
          >
            <ImCancelCircle
              className="flex float-right mr-6 cursor-pointer"
              style={{ zIndex: 1001 }}
            />
          </div>
          <div className=" absolute px-2">
            <form action="" onSubmit={updateProfile}>
              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Roll No
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Course
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Year
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={Year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Branch
                </label>
                <input
                  type="text"
                  className="w-[350px] m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)] px-2"
                  name=""
                  id=""
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  Email
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  From Date
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="input-form flex flex-col">
                <label htmlFor="" className="text-[#303030] pl-5 pt-5">
                  To Date
                </label>
                <input
                  type="text"
                  className="w-[350px] px-2 m-auto h-[43px] rounded-[5px] border-2 border-[#E0E0E0] focus:outline-[rgb(57,0,80)]"
                  name=""
                  id=""
                  value={ToDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              <div className="input-form flex pt-5 flex-col">
                <button className="w-[350px] m-auto h-[53px] rounded-[5px] border-2 border-[#E0E0E0] text-white bg-[rgb(57,0,80)]" onClick={approveHandler}>
                  {" "}
                  Approve{" "}
                </button>

                <button className="w-[350px] m-auto h-[53px] rounded-[5px] border-2 border-[#E0E0E0] text-white bg-[rgb(57,0,80)]" onClick={rejectHandler}>
                  {" "}
                  Reject{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailReview;
