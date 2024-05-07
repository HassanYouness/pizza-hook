import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
export default function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative  grid h-svh grid-flow-row grid-rows-[auto_1fr_auto] overflow-hidden">
      {isLoading && <Loader />}
      <Header className="z-20" />
      <div className="overflow-x-hidden overflow-y-scroll">
        <main className={` mx-auto  max-w-3xl  px-4`}>
          <Outlet className="z-10" />
        </main>
      </div>
      <CartOverview className="z-20" />
    </div>
  );
}
