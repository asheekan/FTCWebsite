'use client';
import { useState, useEffect } from "react"
import Image from 'next/image'
import "./format.css";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/Output.json`)
     .then(response => response.json())
     .then((jsonData) => {
      console.log(jsonData) 
      setData(jsonData)
     })
   }, 
  );
  const myArray = ["Team Number", "Team Name", "Rank"]

 function loop(){
  for (let i = 0; i < myArray.length; i++){
    return <p>myArray[i]</p>
  }
 }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="stripe">
      </div>  
      <h1>FTC Scouting</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> 
  <table className="bigTable">
    <tr>
      <th>Rank</th>
    </tr>
    {data && data.map((team, index) => (
      <tr key={index}>
        <td>{team.Rank}</td>
      </tr>
    ))}
  </table>

  <table className="bigTable">
    <tr>
      <th>Team Number</th>
    </tr>
    {data && data.map((team, index) => (
      <tr key={index}>
        <td>{team.TeamNumber}</td>
      </tr>
    ))}
  </table>

  <table className="bigTable">
    <tr>
      <th>High Score</th>
    </tr>
    {data && data.map((team, index) => (
      <tr key={index}>
        <td>{team.HighScore}</td>
      </tr>
    ))}
  </table>
</div>


    </main>
  )
}
