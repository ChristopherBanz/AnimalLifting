import React, {useState} from 'react'
import data from '../animaldb.json' with { type: "json" };

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState("")
    const [foundAnimal, setFoundAnimal] = useState([])

      const handleChange = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value);
      };

      function searchAndDisplay(){
        const liftychonkins = data.filter(data => data.averageLBs < searchInput)
        var lifterdood;
        var y = Infinity;
        var x
        for (x=0;x < data.length; x++){
            if (Math.abs(searchInput - data[x].averageLBs)<y){
                y = Math.abs(searchInput - data[x].averageLBs)
                lifterdood = data[x];
            }
            }
            console.log(lifterdood);
        document.getElementById("submitdisplay").textContent = "The average " + JSON.stringify(lifterdood.name) + " weighs " + JSON.stringify(lifterdood.averageLBs);
      }

      return <div>
        <input type="number" placeholder="a bajillion?" onChange={handleChange} value={searchInput}></input>
        <button type="submit" onClick={searchAndDisplay}>submit</button>
        <div id="submitdisplay"></div>
      </div>
}
export default Searchbar;