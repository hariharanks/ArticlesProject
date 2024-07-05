import axios from 'axios';
// import 'dotenv/config';

// const BASE_URL = process.env.BASE_URL;
// const SECRET_KEY = process.env.SECRET_KEY;
const BASE_URL = "https://api.nytimes.com/";
const SECRET_KEY = "vHckoNaL9uZxJIk4GG9cDEBVBHWlVtee";
const PERIOD = 1

console.log("BASE_URL, SECRET_KEY=============", BASE_URL, SECRET_KEY);

const getArticles = async () => {
    try {
        const URL = `${BASE_URL}/svc/mostpopular/v2/viewed/${PERIOD}.json?api-key=${SECRET_KEY}`;
        const response = await axios.get(URL);
        if(response.status === 200 && response.data){
            console.log("data========", response.data)
            return response.data;
        }
    }catch(e){
        console.log("error====", e);
    }


}

export default getArticles;