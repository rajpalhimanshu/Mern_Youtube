import axios  from 'axios';


const BASE_URL ='https://youtube138.p.rapidapi.com'
const options = {
  params: {
    hl:"en",
    gl:"US"},
  headers: {
    'X-RapidAPI-Key':'0672605a6cmsh9fcf79878640f9ap1c579djsn0fa41c873542',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  }
};
export const fetchDataFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
}

