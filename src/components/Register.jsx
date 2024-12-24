"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import useAuthContext from "@/hooks/use-hooks";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Button } from "@material-tailwind/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setphoneno] = useState(0);
  const [otp, setOtp] = useState(0);
  const [numberValue, setNumberValue] = useState("");
  const [showLoginWithMobileNumber, setShowLoginWithMobileNumber] =
    useState(false);
  const [otpFlag, setOtpFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const {
    isLoggedIn,
    setIsLoggedIn,
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
  } = useAuthContext();
  const handleLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };
  const [value, setValue] = useState();

  const router = useRouter();
  const formContainerRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  // Function to handle input change and allow only numeric values
  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Replace non-digit characters with empty string
    setNumberValue(newValue);
    setNumberValue(" ");
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       showSignUp &&
  //       formContainerRef.current &&
  //       !formContainerRef.current.contains(event.target) &&
  //       !event.target.closest(".register-button")
  //     ) {
  //       setShowSignUp(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showSignUp]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-black bg-opacity-50 z-20">
      <div className="rounded-lg shadow-lg">
        <div
          className="flex flex-col items-center justify-center lg:pr-10 lg:pl-20 lg:mb-10 mr-auto ml-auto max-w-6xl
        xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center justify-center lg:mb-0 mb-10 lg:pl-10 lg:flex-row pl-28  ">
            <div className="lg:w-96 lg:mt-20 w-64 flex justify-end">
              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-gray-600">
                  Sign Up
                </p>

                <form className="w-full mt-6 mr-0 mb-6 ml-0 relative space-y-8 sm:max-w-full md:max-w-full xm:w-full ">
                  <div>
                    <div className="relative">
                      <p
                        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                      >
                        Email
                      </p>
                      <input
                        placeholder="Johndoe@gmail.com"
                        type="email"
                        className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-72 pt-3 pr-4 pb-3 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                      border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <p
                        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                      >
                        Phone No.
                      </p>
                      <div
                        className="border focus:outline-none mt-4
                      focus:border-black  bg-white
                      border-gray-300 rounded-md"
                      >
                        <PhoneInput
                          defaultCountry="IN"
                          value={phoneno}
                          onChange={setphoneno}
                          placeholder="Enter Phone number"
                          className="pl-4"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <p
                        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                      >
                        Password
                      </p>
                      <input
                        placeholder="Password"
                        type="password"
                        className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-72 pt-3 pr-4 pb-3 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                      border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <p
                        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute"
                      >
                        Confirm Password
                      </p>
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-72 pt-3 pr-4 pb-3 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                      border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative mt-4">
                      <Button
                        type="submit"
                        className="w-full tracking-wide inline-block px-4 py-2 text-lg font-medium text-center bg-[#fb641b] hover:bg-
                      rounded-lg transition duration-200 text-white"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </form>
                <p className="w-full pt-2 text-black text-center">
                  Do have an account?
                  <button
                    onClick={handleLogin}
                    className="self-end font-small pl-1 text-gray-600 text login-button"
                  >
                    Login
                  </button>
                </p>
              </div>
              <div className="h-10 w-10 mt-2 absolute z-20">
                <button onClick={() => setShowSignUp(false)}>
                  <AiOutlineClose className="h-7 w-7 text-gray-700 hover:text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
