import axios from 'axios';

const Axios = axios.create({
    baseURL:"https://restcountries.com/v3.1"
});

export const getCountryData = ()=>{
        return Axios.get("/all?fields=name,capital,currencies,population,flags")

};

export const getCountryIndivisualData = (name)=>{
    return Axios.get(`/name/${name}?fullText=true&fields=name,capital,currencies,population,flags,currencies,region,languages,area,timezones,continents`)

};