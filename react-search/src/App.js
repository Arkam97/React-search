import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Scroll from './Component/Scroll';
import SearchList from './Component/SearchList';
import axios from 'axios';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [brokers, setBrokers] = useState([]);
  const [searchField, setSearchField] = useState("");


  const filteredBrokers = brokers?.slice(0,10);


  const SearchBrokers = async (event) => {
    event.preventDefault();
    console.log(searchField);

    await axios.get(`https://mini-apps.stage.effi.com.au/api/Brokers?query=${searchField}`)
      .then((response) => {
        setIsLoaded(true);
        setBrokers(response.data);
        setIsLoaded(false)
        console.log(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }


  function searchList() {
    return (
      <Scroll>
        <SearchList filteredBrokers={filteredBrokers} />
      </Scroll>
    );
  }


  return (
    <div className="app">
      <section className="garamond">

        <form class=" mw6 center " onSubmit={SearchBrokers} >
          <div className="navy georgia ma0 grow">
            <h2 className="f2">Search Brokers</h2>
          </div>

          <input
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search People"
            value={searchField}
            onChange={(e) => { setSearchField(e.target.value) }}
          />

          <button
            class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple"
            type="submit"
          >
            Search
          </button>
        </form>
        {isLoaded && <>loading...</>}
        {searchList()}
      </section>
    </div>

  );
}

export default App;
