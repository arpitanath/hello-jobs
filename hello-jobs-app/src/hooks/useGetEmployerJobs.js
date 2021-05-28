import { useEffect, useState } from "react";

export function useGetEmployerJobs() {
  const [response, setData] = useState([]);
  useEffect(() => {
    fetch("/data/employerJobs.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(res);
      });
  },[]);
  return {response};
}
