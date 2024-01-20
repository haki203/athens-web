import React, { useEffect } from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SigninDefaultPage: React.FC = () => {
  const navigate = useNavigate();

  const googleSignIn = useGoogleLogin({
    onSuccess: (res: any) => {
      // Lưu access token vào localStorage
      console.log("token khi login ne: " + res.access_token);

      saveDataWithExpiration('access_token', res.access_token, 1);
      alert("Login successfull. 😍");
      navigate('/');
      console.log('navigate roi');
      
    },
  });
  //ham luu token
  const saveDataWithExpiration = (key, data, expirationHours) => {
    const expirationMS = expirationHours * 60 * 60 * 1000; // Chuyển giờ thành mili giây
    const expirationTime = new Date().getTime() + expirationMS;
    const dataToSave = {
      data: data,
      expirationTime: expirationTime,
    };
    console.log(key);
    console.log(expirationHours);
    console.log(data);
    console.log(key, "---", dataToSave);

    localStorage.setItem(key, JSON.stringify(dataToSave));
    navigate('/');

    console.log('save data with expiration-----');
  };
  /// ham get token
  const getDataWithExpiration = (key) => {
    console.log(key);

    const storedData = localStorage.getItem(key);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const currentTime = new Date().getTime();

      if (currentTime < parsedData.expirationTime) {
        // Dữ liệu còn hiệu lực, trả về dữ liệu
        return parsedData.data;
      } else {
        // Dữ liệu đã hết hạn, xóa dữ liệu và trả về null
        localStorage.removeItem(key);
        return null;
      }
    }
    return null;
  };
  useEffect(() => {
    const checkTokenGoogle = () => {
      const retrievedData = getDataWithExpiration('access_token');

      if (retrievedData !== null) {
        // Dữ liệu còn hiệu lực
        console.log("token con hieu luc ma ",retrievedData);
        navigate('/');

      } else {
        // Dữ liệu đã hết hạn hoặc không tồn tại
        console.log("Data has expired or does not exist.");
      }
    }
    return checkTokenGoogle();
  }, []);
  // Lấy dữ liệu từ localStorage
  // const retrievedData = getDataWithExpiration("access_token");

  // if (retrievedData !== null) {
  //   // Dữ liệu còn hiệu lực
  //   console.log(retrievedData);
  // } else {
  //   // Dữ liệu đã hết hạn hoặc không tồn tại
  //   console.log("Data has expired or does not exist.");
  // }

  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[106px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1260px] mx-auto w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              Manage your work more effectively
            </Text>
            <Img
              className="h-[483px] w-full"
              src="images/img_workingtime.svg"
              alt="workingtime"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24Bluegray800"
                >
                  Login to Athens
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                  <Button
                    className="common-pointer bg-white-A700 border border-indigo-50 border-solid cursor-pointer flex items-center justify-center min-w-[452px] sm:min-w-full pl-[23px] pr-[34px] py-[18px] rounded"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        className="h-[18px] mb-px mr-[35px]"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    }
                  >
                    <div className="font-medium sm:px-5 text-bluegray-800 text-center text-sm">
                      Login with Google
                    </div>
                  </Button>
                  <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full">
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                    <Text
                      className="text-bluegray-800 text-sm"
                      size="txtInterRegular14Bluegray800"
                    >
                      Or
                    </Text>
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="xyz@gmail.com"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Password
                        </Text>
                        <Input
                          name="password_One"
                          placeholder="************"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pl-5 pr-[35px] pt-[15px] rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      <CheckBox
                        className="font-medium sm:pr-5 text-bluegray-800 text-left text-sm"
                        inputClassName="flex-1 mr-[5px]"
                        name="remember"
                        id="remember"
                        label="Remember"
                      ></CheckBox>
                      <Text
                        className="flex-1 text-bluegray-800 text-right text-sm underline w-auto"
                        size="txtInterMedium14Bluegray800"
                      >
                        Forgot password?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                  LOGIN
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-bluegray-800 text-sm w-auto"
                    size="txtInterMedium14Bluegray800"
                  >
                    You don’t have an account yet?
                  </Text>
                  <Text
                    className="text-deep_orange-300 text-sm underline w-[51px]"
                    size="txtInterMedium14Deeporange300"
                  >
                    Sign up
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;
