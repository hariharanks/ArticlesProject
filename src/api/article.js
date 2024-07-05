import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "https://api.nytimes.com/";
const SECRET_KEY = process.env.SECRET_KEY || "vHckoNaL9uZxJIk4GG9cDEBVBHWlVtee";
const PERIOD = 1

const getArticles = async () => {
    try {
        const URL = `${BASE_URL}/svc/mostpopular/v2/viewed/${PERIOD}.json?api-key=${SECRET_KEY}`;
        const response = await axios.get(URL);
        if(response.status === 200 && response.data){
            return response.data;
        }
    }catch(e){
        console.log("error====", e);
    }


}

export default getArticles;