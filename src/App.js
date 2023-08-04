//import logo from './logo.svg';
import Wolf from "./wolf.jpg";
 import './App.css';

//for table
/*import Table from "./Table.js"
import './Table.css';*/

//for list
/*import List from "./List.js"
import './List.css';*/

//import Joke from './component/joke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='para'  ><b>MY FAVORITE ANIMAL</b></p>
        <img src={Wolf} className="App-logo" alt="logo" />
        <table className='table1' >
          <tr><td className='td1'  >ABOUT</td></tr>
        </table>
        <div className='pdiv' >
          <p className='text1'>
            <pre>
 Gray Wolf (Canis Lupus): the largest wild member of the dog family.<br></br>

             <b>AKA:</b> Timber wolf<br></br>

          <b>     Kingdom:|</b> Animalia<br></br>
          <b>     Phylum: | </b>Chordata<br></br>
          <b>   Class: |</b> Mammalia<br></br>
          <b>     Order: |</b> Carnivora<br></br>
          <b>   Family:|</b> Canidae<br></br>
          <b>  Genus: |</b> Canis<br></br>
          <b>     Species:|</b>C. Lupus
            </pre>
          </p>
        </div>
        <div className='pdiv2'  >
        <p className='text2' >The wolf has very dense and fluffy winter fur. The winter fur is highly resistant to the cold. 
          Wolves in northern climates can rest comfortably in open areas at minus 40 degrees Fahrenheit.
      Diet: Wolves are natural-born predators and are well-equipped to take down prey. They have keen senses, 
      large canine teeth, powerful jaws and the ability to run at 37 miles per hour.
         Gray wolves typically hunt and move overnight, especially in area with a high human population...<a  className='at'  href='https://www.nationalgeographic.com/animals/mammals/facts/gray-wolf' target="_blank" rel="noreferrer"  >Read more..</a></p>
        </div>
        <div className='pdiv3'>
        <iframe width="598" height="317" src="https://www.youtube.com/embed/YXMo5w9aMNs" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </header>
    </div>
  );

//for Table
/*
return(
  <div className="App"   >

    <Table></Table>
  </div>
)*/




//For List
/*
return(
  <div className="App" >
    <List></List>
  </div>
)*/

}

export default App;
