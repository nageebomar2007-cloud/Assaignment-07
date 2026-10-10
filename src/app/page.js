import Banner from "@/components/Banner";
import MarketPrice from "@/components/MarketPrice";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
        <Banner/>

         <MarketPrice/>
         <ToastContainer />
    </div>
  );
}
