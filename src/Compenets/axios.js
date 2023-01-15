import axios from 'axios'


const instance = axios.create({
  // the api (cloud function) URL
  baseURL: "https://us-central1-clone-men.cloudfunctions.net/api",
});


export default instance;