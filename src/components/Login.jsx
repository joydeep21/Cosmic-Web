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
import { FaPhoneAlt } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setphoneno] = useState(0);
  const [otp, setOtp] = useState(0);
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

  const router = useRouter();
  const formContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await HandleLogin(email, password, router, setIsLoggedIn, setShowLogin);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    await HandleGoogleLogin(router, setIsLoggedIn, setShowLogin);
  };

  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    await HandleFacebookLogin(router, setIsLoggedIn, setShowLogin);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    await HandleSendOtp(phoneno, setConfirmObj, setOtpFlag);
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    await HandleSubmitOtp(confirmObj, otp, router, setIsLoggedIn, setShowLogin);
  };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       showLogin &&
  //       formContainerRef.current &&
  //       !formContainerRef.current.contains(event.target) &&
  //       !document.querySelector(".login-button").contains(event.target) &&
  //       !event.target.closest(".login-button")
  //     ) {
  //       console.log("hi");
  //       setShowLogin(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-black bg-opacity-50 z-20">
      <div className="rounded-lg shadow-lg">
        <div
          className="flex flex-col items-center justify-center lg:pr-10 lg:pl-20 lg:mb-10 mr-auto ml-auto max-w-6xl
        xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center justify-center lg:mb-0 mb-10 lg:pl-10 lg:flex-row px-5  ">
            <div className="lg:w-96 lg:mt-20 w-76 flex justify-end">
              <div
                className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
              relative z-10"
              >
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-gray-600">
                  Login
                </p>

                <form className="w-full mt-6 mr-0 mb-6 ml-0 relative space-y-8 sm:max-w-full md:max-w-full xm:w-full ">
                  {showLoginWithMobileNumber === true ? (
                    otpFlag === false ? (
                      <div>
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
                          <div id="recaptcha-verifier"></div>
                        </div>
                        <div className="relative mt-4">
                          <Button
                            type="submit"
                            onClick={handleSendOtp}
                            className="w-full inline-block px-5 py-4 text-xl font-medium text-center bg-orange-700
                          rounded-lg transition duration-200 text-white"
                          >
                            Send Otp
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="relative">
                          <p
                            className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                          absolute"
                          >
                            OTP
                          </p>
                          <input
                            placeholder="OTP"
                            type="number"
                            onChange={handleOTPChange}
                            className="border placeholder-gray-400 focus:outline-none
                          focus:border-black w-full pt-4 pr-4 pb-6 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                          border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="relative mt-4">
                          <button
                            type="submit"
                            onClick={handleSubmitOtp}
                            className="w-full inline-block px-5 py-4 text-xl font-medium text-center bg-or hover:bg-orange-700
                          rounded-lg transition duration-200 text-white"
                          >
                            Submit Otp
                          </button>
                        </div>
                      </div>
                    )
                  ) : (
                    <div>
                      <div className="relative">
                        <p
                          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                        absolute"
                        >
                          Email
                        </p>
                        <input
                          placeholder="johndoe@gmail.com"
                          type="email"
                          className="border placeholder-gray-400 focus:outline-none
                        focus:border-black w-72 pt-2 pr-4 pb-2 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                        border-gray-300 rounded-md"
                        />
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
                        focus:border-black w-72 pt-2 pr-4 pb-2 pl-4 mt-4 mr-0 mb-0 ml-0 text-base block bg-white
                        border-gray-300 rounded-md"
                        />
                        <div className="flex gap-2">
                          <input type="checkbox" />
                          <p className="text-xs font-sans mt-3 tracking-wider">
                            By continuing, you agree to Chosmic&apos;s Terms of
                            Use and Privacy Policy.
                          </p>
                        </div>
                      </div>
                      <div className="relative mt-4">
                        <Button
                          type="submit"
                          className="w-full tracking-wide inline-block px-4 py-2 text-lg font-medium text-center bg-[#fb641b] hover:bg-
                        rounded-lg transition duration-200 text-white"
                        >
                          LogIn
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
                <p className="w-full pb-4 text-base text-black text-center">
                  Sign In With
                </p>
                <ul className="grid grid-cols-3 gap-4 w-full justify-center">
                  <li className="w-full">
                    <Button
                      type="submit"
                      className="flex md:h-11 md:w-20 h-10 w-20  items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </li>
                  <li className="w-full">
                    <Button
                      type="submit"
                      className="flex md:h-11 md:w-20 h-10 w-20  items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                    >
                      <svg
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </li>
                  {showLoginWithMobileNumber === true ? (
                    <li className="w-full px-2">
                      <button
                        onClick={() => setShowLoginWithMobileNumber(false)}
                        className="flex md:h-11 md:w-20 h-10 w-20  items-center justify-center rounded-md bg-black text-white hover:bg-opacity-90"
                      >
                        <FaPhoneAlt />
                      </button>
                    </li>
                  ) : (
                    <li className="w-full px-2">
                      <button
                        onClick={() => setShowLoginWithMobileNumber(true)}
                        className="flex md:h-11 md:w-20 h-10 w-20  items-center justify-center rounded-md bg-black text-white hover:bg-opacity-90"
                      >
                        <FaPhoneAlt />
                      </button>
                    </li>
                  )}
                </ul>
                <p className="w-full pt-2 text-black text-center">
                  Do not have an account?
                  <button
                    onClick={handleShowRegister}
                    className="self-end font-small pl-1 text-gray-600 text register-button"
                  >
                    Register Now
                  </button>
                </p>
              </div>
              <div className="h-10 w-10 mt-2 absolute z-20">
                <button onClick={() => setShowLogin(false)}>
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
