import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";


const Login = () => {
  // const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");
  // const { authUser, isLoading, setAuthUser } = useAuth();

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     router.push("/checker");
  //   }
  // }, [authUser, isLoading, router]);

  // // if (auth?.currentUser?.email) {
  // //   login({ username: auth?.currentUser?.email });
  // // }

  // const singupHandler = async (e) => {
  //   e.preventDefault();
  //   if (!email || !password || !repeatPassword) return;
  //   try {
  //     const username = email.split("@")[0];
  //     const { user } = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     await updateProfile(auth.currentUser, {
  //       displayName: username,
  //     });

  //     setAuthUser({
  //       uid: user.uid,
  //       email: user.email,
  //       displayName: username,
  //       roleProvided: user.uid,
  //     });

  //     console.log(authUser);
  //     const existingUser = doc(db, "users", user.uid);
  //     const userData = {
  //       email: user.email,
  //       displayName: username,
  //       role: "student",
  //       uid: user.uid,
  //     };

  //     await setDoc(existingUser, userData);
  //   } catch (error) {
  //     console.error("An error occured", error);
  //   }
  // };


  // const addUserToFirestore = async (user) => {
  //   try {
  //     const existingUser = doc(db, "users", user.uid);
  //     const usersRef = collection(db, "users");

  //     // Check if the user already exists in Firestore by UID
  //     // const existingUser = await usersRef.doc(user.uid).get();

  //     if (!existingUser.exists) {
  //       // If the user doesn't exist in Firestore, add them
  //       // await addDoc(collection(db, "users"), {
  //       //   displayName: user.displayName,
  //       //   email: user.email,
  //       //   phoneNumber:user.phoneNumber,
  //       //   uid:user.uid,
  //       //   // photoUrl:user.photoUrl,
  //       // });

  //       const studentData = {
  //         displayName: user.displayName,
  //         email: user.email,
  //         phoneNumber: user.phoneNumber,
  //         uid: user.uid,
  //         role: "student",
  //       };

  //       await setDoc(existingUser, studentData);
  //     }

  //     console.log("User added to Firestore:", user.uid);
  //   } catch (error) {
  //     console.error("Error adding user to Firestore:", error);
  //   }
  // };

  // console.log(authUser)
  // // Sign in with Google
  // const signInWithGoogle = async () => {
  //   const user = await signInWithPopup(auth, Provider);
  //   console.log(user.user);
  //   await addUserToFirestore(user.user);
  // };

  return (
    <>
      {/* <div className="block justify-center m-auto items-center md:w-[25%]">
    

        <h2 className="text-2xl px-5 mb-4 mt-[-2rem]">Create your Account</h2>

        <form className="m-auto px-5" onSubmit={singupHandler}>
          <input
            type="text"
            placeholder="Email"
            className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name=""
            id=""
            style={{ background: "rgba(217, 217, 217, 0.28)" }}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
            name=""
            id=""
            style={{ background: "rgba(217, 217, 217, 0.28)" }}
          />

          <input
            type="text"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
            name=""
            id=""
            style={{ background: "rgba(217, 217, 217, 0.28)" }}
          />

          <Link
            href="/"
            className=" mr-4 h-[15px] text-[#390050] my-2 color-[#390050] flex justify-end text-[14px] mb-4"
          >
            Forgot Password?
          </Link>

          <input
            type="submit"
            className="w-[336px] h-[58px] 
bg-[#390050] rounded-[10px] text-white"
            value="Sign Up"
          />
        </form>

        <hr
          className="w-[232px] h-[1px] items-center m-auto my-5"
          style={{ background: " rgba(97, 88, 88, 0.78)" }}
        />

        <div className="px-5">
          <h2 className="text-lg m-auto text-center mb-4">Or sign in with</h2>

          <button
            className="w-[336px] h-[48px] 
          bg-[#390050] rounded-[10px] flex justify-around items-center my-3 text-white px-5 "
            // value="Sign in"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="text-4xl" /> Continue with Google{" "}
          </button>
        </div>
        <p className="m-auto text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href={"/login"} className="text-[#390050]">
            Sign in
          </Link>
        </p>
      </div> */}
    </>
  );
};

export default Login;
