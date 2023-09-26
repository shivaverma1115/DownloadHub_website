import { Box } from "@chakra-ui/react";
import AllRoutes from "./Components/AllRoutes";
import { Link } from "react-router-dom";


function App() {
  return (
    <Box bg={'#eeeeee'} >
      {/* <a href="https://drive.google.com/uc?export=download&id=1-KE-ygDQe5QYb-nfWbYufi5k7JRW5-TP" download>Download</a> */}
      {/* <a href="https://drive.google.com/file/d/1-KE-ygDQe5QYb-nfWbYufi5k7JRW5-TP/view?usp=drive_link" download>Download</a> */}
      <AllRoutes />
    </Box>
  );
}

export default App;
