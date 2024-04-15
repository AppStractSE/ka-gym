import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer({ children, showDrawer, setShowDrawer }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[999999] transform overflow-hidden bg-gray-900 bg-opacity-25 duration-500 ease-in-out
        ${
          showDrawer
            ? "translate-x-0 opacity-100 transition-opacity"
            : "invisible opacity-0 transition-all delay-500"
        }`}
    >
      <div
        className={`absolute right-0 h-full w-screen max-w-md transform bg-vanilla-powder-500 text-night-500 shadow-xl transition-all duration-500 ease-in-out sm:max-w-sm
          ${showDrawer ? "translate-x-0" : " translate-x-full"}`}
      >
        <div className="relative flex flex-col space-y-6 overflow-y-scroll">
          <div className="flex items-center justify-between p-4">
            <Link
              href={"/"}
              className="text-4xl font-normal tracking-tight md:text-4xl"
            >
              Karl-Alfred Gym
            </Link>
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="text-3xl text-night-200 hover:text-night-700"
            >
              <IoMdClose />
            </button>
          </div>
          {children}
        </div>
      </div>
      <div
        className="h-full w-screen"
        onClick={() => {
          setShowDrawer(!showDrawer);
        }}
      />
    </div>
  );
}
