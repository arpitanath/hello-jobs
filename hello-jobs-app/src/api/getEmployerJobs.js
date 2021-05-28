
export default function GetEmployerJobs() {
  let  response;
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
        return res;
      });
  
 
}
