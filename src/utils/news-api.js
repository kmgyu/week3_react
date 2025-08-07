// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://newsapi.org"
const NEWS_KEY = import.meta.env.VITE_API_NEWS_KEY || '';

export async function getNewsArticle ()  {
    try {
    const response  = await axios.get(`${baseURL}/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_KEY}`
            );
    console.log(response.data.articles);
    return response.data.articles;
    } catch (error) {
      console.error('오류 발생', error);
      throw error;
    }
}
