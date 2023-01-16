import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown';
import Results from './components/Results';
import Result from './components/Result';
import { getByName, getNameContains,getById,getCountChildren, getIsCitizen,getHasDrivingLicense } from './api/getData';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [disabled, setDisabled] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('Search by Name');
  const [checkboxLabel, setCheckboxLabel] = useState('Contains');

  const [results, setResults] = useState([
    {
      "id": 2,
      "name": "Michael Tall",
      "isCitizen": false,
      "hasDrivingLicense": false,
      "children": [
          {
              "id": 5,
              "name": "Sarah Bloggs",
              "citizenId": 2,
              "isCitizen": true
          }
      ]
  },
    
  ]);

 
  const handleSearchButton = (e) => {
    e.preventDefault();
    if(searchBy==="name"){
    if(checkboxValue){
      getNameContains(searchInput).then(result => {setResults(result)});
    } else {
      getByName(searchInput).then(result => {setResults(result)});
    }
  }
  else if(searchBy==="id"){
    getById(searchInput).then(result => {setResults(result)});
  } 
  else if(searchBy==="children"){
    getCountChildren(searchInput).then(result => {setResults(result)});
  } else if(searchBy==="isCitizen"){
    getIsCitizen(checkboxValue).then(result => {setResults(result)});
  } else if(searchBy==="hasLicense"){
    getHasDrivingLicense(checkboxValue).then(result => {setResults(result)});
  }
    
  };
console.log(results.isCitizen);
  useEffect(() => {
    switch (searchBy) {
      case 'name':
        setDisabled(false);
        setPlaceHolder('Search by Name');
        setCheckboxLabel('Contains');
        break;
      case 'id':
        setDisabled(false);
        setPlaceHolder('Search by ID');
        setCheckboxLabel('none');
        break;
      case 'isCitizen':
        setDisabled(true);
        if (checkboxValue) {
          setPlaceHolder('Search All Citizens');
        } else {
          setPlaceHolder('Search All Non-Citizens');
        }
        setCheckboxLabel('Is Citizen');
        break;
      case 'hasLicense':
        setDisabled(true);
        if (checkboxValue) {
          setPlaceHolder('Search All with License');
        } else {
          setPlaceHolder('Search All without License');
        }
        setCheckboxLabel('Has License');
        break;
      case 'children':
        setDisabled(false);
        setPlaceHolder('Search Number of Children by Person ID');
        setCheckboxLabel('none');
        break;
      default:
        setDisabled(false);
    }
  }, [checkboxValue, searchBy]);

  return (
    <div className="App">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        disabled={disabled}
        placeHolder={placeHolder}
        handleSearchButton={handleSearchButton}
      />
      <DropDown
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        checkboxLabel={checkboxLabel}
        checkboxValue={checkboxValue}
        setCheckboxValue={setCheckboxValue}
      />
      {searchBy==="id" || searchBy==="children" ? <Result results={results} /> : <Results results={results} /> }
    </div>
  );
}

export default App;

