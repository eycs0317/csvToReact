import "./App.css";
import useFetchData from "./hooks/useFetchData.tsx";
import Menu from "./components/Menu.tsx";
import React, { useState } from "react";
import LanguageSelector from "./components/LanguageSelect.tsx";

type LanguageType = "tw" | "cn" | "eng";
type CategoryType =
  | "Cold Appetizer"
  | "Dim Sum"
  | "Soup"
  | "Wok"
  | "Hand Made Noodles / Rice Cake / Fried Rice"
  | "Weekend Brunch"
  | "Traditional Dessert"
const App = () => {
  const [language, setLanguage] = useState<LanguageType>("eng"); // "tw" | "cn" | "eng";
  const [category, setCategory] = useState<CategoryType>("Hand Made Noodles / Rice Cake / Fried Rice");
  // category = Cold Appetizer, Dim Sum, Soup, Wok, Hand Made Noodles / Rice Cake / Fried Rice, Weekend Brunch, Traditional Dessert
  const { csvData, error } = useFetchData(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXh46Qt5x_LjOKrb2B4K5LLboWH6ORIr64QgdZyy7laL2czt21u35de8pr0WWk4vuR4k0bJojQ4cr/pub?output=csv"
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!csvData) {
    return <div>Loading...</div>;
  }
  // console.log("csvData", csvData);
  return (
    <div>
      <h1>CSV Data</h1>
      <h1 className="text-5xl text-sky-600 font-bold underline">
      Tailwind testing
    </h1>
      <LanguageSelector onLanguageChange={(lang) => setLanguage(lang as LanguageType)}/>
      <Menu data={csvData} category={category} language={language} />
    </div>
  );
};

export default App;
