import React from "react";

const LanguageSelect = ({ onLanguageChange }: { onLanguageChange: (lang: string) => void }) => {
  const [language, setLanguage] = React.useState("eng");

  const handleClick = (lang: string) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div>
      {["eng", "cn", "tw"].map((lang) => (
        <button
          key={lang}
          onClick={() => handleClick(lang)}
          style={{ backgroundColor: language === lang ? "#ccc" : "#fff" }}
        >
          {lang === "eng" ? "English" : lang === "cn" ? "简体" : "繁體"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;

