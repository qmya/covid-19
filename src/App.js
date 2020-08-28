import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
import { Cards, Charts, CountryPicker } from './components';

class App extends React.Component{
  state = {
    data : {},
    country: '',
  }


 async componentDidMount(){
   const fetchedData = await fetchData();
   
   this.setState({ data : fetchedData });
   
 }

 handleCountryChange = async (country) => {
   
   //fetch the data
   const fetchedData = await fetchData(country);
  
   //set the state
   this.setState({ data: fetchedData, country: country });
 }

  render(){
    const { data,country } = this.state;

  return (
    <div className={styles.container}>
      <h1>App</h1>
      <Cards data = {data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      
    </div>
  );
}
}
export default App;
