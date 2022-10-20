import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2151de2c3ae015353ee5219bd8ce68be`;
    const fetchAPI = async () => {
      const res = await fetch(url);
      const resJson = await res.json();
      // console.log(resJson);
      setCity(resJson.main);
    }
    fetchAPI();
  }, [search]);

  const currDate = new Date();
  const date = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const year = currDate.getFullYear();

  const showTime = currDate.getHours() 
    + ':' + currDate.getMinutes()
    + ":" + currDate.getSeconds();
  
  return (
    <>
      <div className='search container'>
        <div className='inputSearch'>
          <input type='search' value={search} placeholder='Enter city name' onChange={(e) => {setSearch(e.target.value)}} />
        </div>
      </div>
      <div className='search container'>
      {
        !city ? (
          <p>Sorry, no data found</p>
        ) : (
          <>
          <div className='city'>
            <div className='left'>
              <h1><i className='bx bxs-map'></i> {search}</h1>
              <p>{date}-{month}-{year}</p>
              <h1>{showTime}</h1>
            </div>
            <div className='right'>
            <i className='bx bx-cloud'></i>
              <h6>Today's Weather</h6>
            </div>
          </div>
          <div className='wheather pt-4'>
            <h1>{city.temp}°C</h1>
            <div className='maxMin'>
              <h5><span>Max:<b className='ps-3'>{city.temp_max}°</b></span> <span className='ps-3'>Min:<b className='ps-3'>{city.temp_min}°</b></span></h5>
            </div>
            {/* <div className='wind'>
              <h5><span>Wind<b className='ps-2'>({city.temp})</b></span> <span className='ps-1'>{city.temp} mi/hr</span></h5>
            </div> */}
          </div>
          </>
        )
      }
    </div>
    </>
  )
}

export default Search;
