import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

type DarkMode = {
  mode: "light" | "dark" | string;
};

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<DarkMode>({ mode: "light" });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => ({
      mode: prevMode.mode === "light" ? "dark" : "light",
    }));

    document.body.classList.toggle("dark");

    localStorage.setItem('darkmodetoggler', darkMode.mode);
  };

  useEffect(() => {
    const localStorageDarkmode = localStorage.getItem('darkmodetoggler');

    if(localStorageDarkmode === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }


  }, [darkMode])



  return (
    <div className="fixed bottom-10 right-10">
      <button onClick={toggleDarkMode}>
        {darkMode.mode === "dark" ? (
          <MdLightMode className="h-[22px] w-[22px] text-black" />
        ) : (
          <MdDarkMode className="h-[22px] w-[22px] text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
