const call = (url,callback)=> {
    //`https://restcountries.com/v3.1/alpha/${lowercase(area)}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data))
}
export default call