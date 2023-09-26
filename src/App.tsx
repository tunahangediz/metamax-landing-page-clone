import "./App.css";
import "./fonts.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Local Metamax</title>
        <meta name="description" content="Metmax emlak borsası" />
        <meta name="keywords" content="realestate,nft,realestate market" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
