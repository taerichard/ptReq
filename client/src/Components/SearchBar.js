import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchLink(props) {
  const [data, setData] = useState({ trainers: [] });

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios.get("api/trainerlocation");

      setData(result.data);
    };
    fetchData();
  }, []);
}
