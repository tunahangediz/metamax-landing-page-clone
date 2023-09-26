import { FC, ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import { chakra } from "@chakra-ui/react";
import Footer from "../footer/Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  // maxW=8xl
  return (
    <>
      <Navbar />
      <chakra.main
        maxWidth={{ base: "6xl", sm: "7xl", md: "7xl", lg: "7xl", xl: "8xl" }}
        mx="auto"
        w="full"
        py="20"
      >
        {children}
      </chakra.main>
      {/* footer will be display here  */}
      <Footer />
    </>
  );
};

export default Layout;
