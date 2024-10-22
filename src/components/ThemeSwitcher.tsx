import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "@/context/ThemeContext";
import HyperText from "./ui/hyper-text";
function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <a href="/PDF/SubhradipDasCV.pdf" target="_blank" rel="noopener noreferrer">
        <div className="inline-block border rounded-lg mt-5 ml-5 px-3 border-black dark:border-white cursor-pointer">
          <HyperText
            className="text-xl text-black dark:text-white"
            text="MY RESUME"
          />
        </div>
      </a>

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