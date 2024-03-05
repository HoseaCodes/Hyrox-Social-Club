import axios from 'axios';
import { rapidApiKey, baseExerciseUrl } from "../constants";


const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET', 
            url,
            params,
            headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = await apiCall(
      baseExerciseUrl + `/exercises/bodyPart/${bodyPart}`
    );
    return data;
}