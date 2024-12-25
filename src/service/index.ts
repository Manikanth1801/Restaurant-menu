// AIzaSyAr8_NEeAkjQkxAdsX7zEt65AyrRo_moFM
// https://docs.google.com/spreadsheets/d/1rndTqVkYoBgcRleSMCA20BprZp2gRFq9v3LO9j4tjRQ/edit?usp=sharing
import { MenuInterface } from "@/types";
import axios from "axios";



export const fetchMenuData = async (): Promise<MenuInterface[]> => {
  const spreadsheetId = "1rndTqVkYoBgcRleSMCA20BprZp2gRFq9v3LO9j4tjRQ"; // Replace with your Google Sheet ID
  const apiKey = "AIzaSyAr8_NEeAkjQkxAdsX7zEt65AyrRo_moFM"; // Replace with your Google API key
  const range = "Sheet1!A:E"; // Adjust this range as per your sheet structure

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const rows = response.data.values;

    // Map rows to your MenuItem interface
    const [header, ...dataRows] = rows;
    return dataRows.map((row:any) => ({
      category: row[header.indexOf("category")],
      name: row[header.indexOf("name")],
      description: row[header.indexOf("description")],
      image: row[header.indexOf("image")],
      price: parseFloat(row[header.indexOf("price")]),
    }));
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};
