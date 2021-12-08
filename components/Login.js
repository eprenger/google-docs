import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div
      className="flex flex-col items-center 
    justify-center min-h-screen py-2"
    >
      <Image
        objectFit="contain"
        height="300"
        width="500"
        src="https://links.papareact.com/1ui"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        button-type="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
