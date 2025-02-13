import { useState, useEffect } from "react";
import axios from "axios";
import {base_url} from "../helper/helper.jsx"

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
      const  data  = await axios.get(base_url+"/api/v1/category/get-category");
      console.log(data.data.category,"data");
      setCategories(data.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}