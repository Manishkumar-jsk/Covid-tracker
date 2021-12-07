import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import CovidChart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/Country';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/covid.png'


class App extends React.Component{
  state = {
    data:{},
    country:'', 
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});

  }

  render() {
    const {data,country} = this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="coronaImage" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <CovidChart data={data} country={country}/>
    </div>
  );
 }
}

export default App;
