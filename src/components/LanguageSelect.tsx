import React from "react";

const LanguageSelect = ({ onLanguageChange }: { onLanguageChange: (lang: string) => void }) => {
  const [language, setLanguage] = React.useState("eng");

  const handleClick = (lang: string) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="fixed right-5 bottom-5  flex bg-slate-700 ">
      {["eng", "cn", "tw"].map((lang) => (
        <button
          key={lang}
          onClick={() => handleClick(lang)}
          className="hover:bg-red-700 py-3 px-7 text-white"
        >
          {lang === "eng" ? "English" : lang === "cn" ? "简体" : "繁體"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;

