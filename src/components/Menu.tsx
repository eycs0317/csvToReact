import React from "react";
export default function Menu({ data, category, language }) {
  console.log("data", data);

  const renderData = data
  .filter((item) => item.Category_en_US === category)
  .map((item) => {
    const langKey = language === "eng" ? "_en_US" : language === "cn" ? "_zh_CN" : "_zh_TW";
    return (
      <div>
        <h2>{item[`Name${langKey}`]}</h2>
        {language === "eng" && <p>{item.Description_en_US}</p>}
        <p>{item.Price}</p>
      </div>
    );
  });


  return (
    <div>
      <div>{category}</div>
      <div>{renderData}</div>
    </div>
  );
}
