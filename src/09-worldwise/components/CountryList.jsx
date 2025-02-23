import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from "./Message"

function CountryList({cities,isLoading}){
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message message="Add your first city by clicking on the map"/>

  const countries = cities.map(city=>({
    country:city.country,
    emoji:city.emoji
})).reduce((acc,current)=>{
    const exists = acc.find(item=>item.country === current.country);
    if(!exists){
        acc.push(current);
    }
    return acc;
  },[])
  return (
    <ul className={styles.countryList}>
        {countries.map((country)=>(<CountryItem country={country} key={country}/>))}
    </ul>
  )
}

export default CountryList