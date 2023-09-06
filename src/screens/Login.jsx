import React, { useState } from 'react';
import './Login.css';
import COVER_IMG from '../assets/images/cover1.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Link,
  Button,
} from '@nextui-org/react';

const Login = () => {
  const [action, setAction] = useState('login');

  return (
    <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute -top-[8%] left-[40%]">
          <h1 className="absolute text-12xl text-[#F3EBE0] font-bold my-5">
            Food
          </h1>
        </div>
        <div className="absolute -top-[8%] left-[103%]">
          <h1 className="absolute text-12xl font-bold my-5">sie.</h1>
        </div>

        <img
          src={COVER_IMG}
          className="relative w-full h-full object-cover -z-20"
        />
        <div className="gradient-overlay -z-10"></div>
      </div>
      <div className="flex flex-row min-w-1/2 justify-between items-center">
        <Card shadow="lg" className="ml-[15%] -bottom-[8%] -left-[50%]">
          {action == 'login' && (
            <CardHeader className="flex flex-col items-start">
              <div className="px-5 pt-3">
                <h2 className="text-xl font-bold pb-2">Login</h2>
                <h4 className="text-lg font-normal">
                  Welcome back! Please enter your details.
                </h4>
              </div>
            </CardHeader>
          )}
          {action == 'signup' && (
            <CardHeader className="flex flex-col items-start">
              <div className="px-5 pt-3">
                <h2 className="text-xl font-bold pb-2">Signup</h2>
                <h4 className="text-lg font-normal">
                  Sign up now and create your account!
                </h4>
              </div>
            </CardHeader>
          )}
          <CardBody className="pt-0">
            <div className="w-full flex flex-col">
              <div className="flex w-2/3 flex-wrap ml-4 mb-2 gap-4">
                <Input type="email" variant="underlined" label="Email" />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex w-2/3 flex-wrap ml-4 mb-4 gap-4">
                <Input type="text" variant="underlined" label="Password" />
              </div>
              <div className="flex flex-row justify-between">
                <Checkbox defaultSelected={false} className="ml-2" size="sm">
                  Remember me
                </Checkbox>
                <Link
                  href="#"
                  color="foreground"
                  underline="hover"
                  className="text-base font-normal"
                >
                  Forgot Password
                </Link>
              </div>
              {action == 'login' && (
                <>
                  <div className="flex flex-row justify-center mt-5">
                    <Button
                      color="warning"
                      variant="solid"
                      className="flex w-1/3 justify-center items-center"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-center pt-3">
                    <p className="text-sm">Don't have an account?</p>
                    <Link
                      color="default"
                      className="text-sm cursor-pointer underline"
                    >
                      &nbsp;Signup.
                    </Link>
                  </div>
                </>
              )}
              {action == 'signup' && (
                <>
                  <div className="flex flex-row justify-center mt-5">
                    <Button
                      color="warning"
                      variant="solid"
                      className="flex w-1/3 justify-center items-center"
                    >
                      Register
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-center pt-3">
                    <p className="text-sm">Already have an account?</p>
                    <Link
                      color="default"
                      className="text-sm cursor-pointer underline"
                    >
                      &nbsp;Login.
                    </Link>
                  </div>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
