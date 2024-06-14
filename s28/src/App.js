import logo from './logo.svg';
import './App.css';

function App() {

  let cricketToday = "New Zeland is officially out from the ICC T20 cricket World Cup"
  return (
    <div className="App">
      <h2> String Methods </h2>
      <button onClick = {()=>{
        console.log(cricketToday.length);
      }}>Length</button>

      <button onClick={()=>{
        console.log(cricketToday);
        console.log(cricketToday.toUpperCase());
        console.log(cricketToday.toLowerCase());
      }}>upper case / lower case</button>

      <button onClick={()=>{
        let firstName = "Roshan ";
        let lastName = "Jamanjyothi";

        console.log(firstName.concat(lastName));
      }}>Concat</button>

      <button onClick={()=>{

        let capital = "      Amaravathi is the capital of Andhra Pradhesh       "

        console.log(`-------${capital.trimStart()}------`);
        console.log(`-----${capital.trimEnd()}-----`);
        console.log(`---${capital.trim()}---`);
      }}>Trim / trim start / trim end</button>

      <button onClick={()=>{
        let india = "I Love India"

        console.log(india.padStart(20, "I"));
        console.log(india.padEnd(20, "a"));

      }}>Pad Start / Pad End</button>

      <button onClick={()=>{

        let ram = "Jai Shree Ram ";

        console.log(ram.repeat(100));
      }}>Repeat</button>

      <button onClick={()=>{
        let actor = "Mahesh can fight, Mahesh is an actor, Mahesh is a dancer.";

        console.log(actor);
        console.log(actor.replace("Mahesh", "Mahesh Babu"));
        console.log(actor.replaceAll("Mahesh", "Mahesh Babu"));
      }}>Repalce / replace All</button>

      <button onClick={()=>{
        let actor = "Mahesh can fight, Mahesh is an actor, Mahesh is a dancer.";

        console.log(actor.split(" "));
      }}>Split</button>

      <button onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        console.log(alphabets.slice(0,10));
        console.log(alphabets.substring(0,10));
        console.log(alphabets.substr(0,5));

      }}>Slice / substring / substr</button>
      <button onClick={()=>{

        for(let i=0;i<cricketToday.length;i++){;

        console.log(cricketToday.at(i));
        // console.log(cricketToday.charAt(i));
      }
      }}>At</button>
    </div>
  );
}

export default App;
