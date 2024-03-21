import axios from 'axios';
import { rapidApiKey, baseExerciseUrl, mongoDBUrl, mongoDBApiKey } from "../constants";


const apiCall = async (url, params, options)=>{
    try {
        if (!options) options = {
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
    let data = await apiCall(baseExerciseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}

export const mutateExercisesByBodypart = async (body) => {
    const newSet = body.newSet;
    const options = {
      method: "POST",
      url: mongoDBUrl + `/insertOne`,
      params: null,
      headers: {
        "Content-Type": "application/json",
        apikey: mongoDBApiKey,
      },
      data: {
        collection: "sets",
        dataSource: "Projects",
        database: "fitness",
        document: {
          username: newSet.username,
          exercise: newSet.exercise,
          reps: newSet.reps,
          weight: newSet.weight,
        },
      },
    };
    let data = await apiCall(mongoDBUrl + `/insertOne`, null, options);
  return data;
};