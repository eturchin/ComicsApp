import axios from "axios";
import {Comic} from "../models/Comic.ts";

const API_BASE_URL = 'https://localhost:7285/api';

export const getRandomComic = async () => {
    const response = await axios.get<Comic>(`${API_BASE_URL}/comic/random`);
    return response.data;
};

export const getComicByNum = async (num: number) => {
    const response = await axios.get<Comic>(`${API_BASE_URL}/comic/${num}`);
    return response.data;
};