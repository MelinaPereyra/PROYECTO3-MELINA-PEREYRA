import Footer from "./Footer";
import Header from "./Header";
import "../components/components.css";
import { Box } from "@mui/material";

const Page = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="page">
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Box>
    </>
  );
};

export default Page;
