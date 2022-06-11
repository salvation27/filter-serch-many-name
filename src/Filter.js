import React ,{useEffect,useState}from 'react'

const Filter = () => {
    const [data,setData] = useState([])
    const [serchApiData, setSerchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState("");
    useEffect(()=>{
const fetchData = ()=>{
fetch("https://61ddf360f60e8f0017668b3a.mockapi.io/users")
  .then((response) => response.json())
  .then((json) => {
    setData(json)
    setSerchApiData(json);
  });
}
fetchData()
    },[])


const handelInput = (e) => {
    if(e.target.value === '') {
      setData(serchApiData);
    } else {
      const filterResult = serchApiData.filter(
        (item) =>
          item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult)
    }
    setFilterVal(e.target.value)
}


  return (
    <div>
      <input
        type="serch"
        placeholder="serch"
        value={filterVal}
        onInput={(e) => handelInput(e)}
      />
      {data.map((item) => (
        <div className='wrap'>
          <p>{item.firstName}</p> - <p>{item.lastName}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter