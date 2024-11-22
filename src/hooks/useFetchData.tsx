import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData(googleSheetUrl: string): {csvData: any, error: string| null} {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCSVData(googleSheetUrl);
  }, [googleSheetUrl]);

  const fetchCSVData = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        try {
          const parsedCsvData: any = parseCSV(response.data);
          setCsvData(parsedCsvData);
        } catch (error) {
          setError(error);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  function parseCSV(csvText) {
    try {
      const rows = csvText.split(/\r?\n/);
      const headers = rows[0].split(",");
      const data: any[] = [];

      for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(",");
        const rowObject = {};

        for (let j = 0; j < headers.length; j++) {
          rowObject[headers[j]] = rowData[j];
        }

        data.push(rowObject);
      }

      return data;
    } catch (error) {
      throw new Error(`Error parsing CSV data: ${error.message}`);
    }
  }

  return { csvData, error };
}
