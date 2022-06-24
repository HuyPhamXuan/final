import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.25:3000",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
const getData =  async (URL_) => {
    return await fetch(URL_).then((response) => {
        return response.json() 
    }).then((result) => {
        return result
    }).catch((err) =>{
        console.log(err)
    })
}
const postData =  async (data, URL_) => {
    return await fetch(URL_,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json() 
    }).then((result) => {
        console.log(result)
        return result
    }).catch((err) =>{
        console.log(err)
    })
}
export { getData, postData }