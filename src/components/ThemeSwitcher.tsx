import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "@/context/ThemeContext";
import HyperText from "./ui/hyper-text";


function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="inline-block border rounded-lg mt-5 ml-5 px-3 border-black dark:border-white">
        <HyperText
          className="text-2xl text-black dark:text-white"
          text="MY RESUME"
        />
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl z-50"
      >
        {darkMode ? <MdOutlineDarkMode /> : <CiLight />}
      </button>
    </>

  );
}

export default ThemeSwitcher;
