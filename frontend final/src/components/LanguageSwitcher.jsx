import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [ready, setReady] = useState(false);

  // Wait until google translate combo exists
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        setReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lang) => {
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) {
      alert("Translator still loading... try again in 1 second.");
      return;
    }

    combo.value = lang;
    combo.dispatchEvent(new Event("change"));
  };

  return (
    <div className="flex gap-2 text-sm items-center">
      {!ready && (
        <span className="text-xs text-gray-400">Loading...</span>
      )}

      <button
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 rounded border border-heritage-border hover:bg-heritage-beige"
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("am")}
        className="px-2 py-1 rounded border border-heritage-border hover:bg-heritage-beige"
      >
        AM
      </button>

      <button
        onClick={() => changeLanguage("fr")}
        className="px-2 py-1 rounded border border-heritage-border hover:bg-heritage-beige"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;





