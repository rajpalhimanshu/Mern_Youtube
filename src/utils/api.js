import axios  from 'axios';


const BASE_URL ='https://youtube138.p.rapidapi.com'
const options = {
  params: {
    hl:"en",
    gl:"US"},
  headers: {
        'X-RapidAPI-Key': 'dcb4ed7b02mshee7c7d1438ed367p121b5ejsn0fe2215605a2',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  }
};
export const fetchDataFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
}

