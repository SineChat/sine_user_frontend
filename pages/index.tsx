import Image from "next/image";
import { Inter } from "next/font/google";
import { AppPage } from "@/shared/components/layouts/Types";

const inter = Inter({ subsets: ["latin"] });

const HomePage: AppPage = () => {
  return (
    <>
      <div>Starting up</div>
    </>
  );
};

export default HomePage;

HomePage.Layout = "Login";
