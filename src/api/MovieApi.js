import axios from 'axios'
import { apiUrl, apiKey } from '../utils/keys'

export const getMoviesByidOrTitle = ({id=null, title=null, type=null, year=null, plot=null}) => {
  let url = `${apiUrl}?apiKey=${apiKey}`;
  if(id){
    url += `&i=${id}`;
  }
  if(title){
    url += `&t=${title}`
  }
  if(type){
    url += `&t=${type}`
  }
  if(year){
    url += `&t=${year}`
  }
  if(plot){
    url += `&t=${plot}`
  }
  return axios.get(url);
}

export const getMoviesBySearch = ({search=null, type=null, year=null, page=null}) => {
  let url = `${apiUrl}?apiKey=${apiKey}`;
  if(search){
    url += `&s=${search}`;
  }
  if(type){
    url += `&type=${type}`
  }
  if(year){
    url += `&y=${year}`
  }
  if(page){
    url += `&page=${page}`
  }
  return axios.get(url);
}

export const getMovieBySearch  = ({}) => {

}

