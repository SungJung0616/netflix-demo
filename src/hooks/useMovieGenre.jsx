import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchGenreMovies = () => {
    return api.get(`/genre/movie/list`)
}

export const useGenreMoviesQuery =() =>{
    return useQuery({
        queryKey:['movie-Genre'],
        queryFn: fetchGenreMovies,
        select: (result)=>result.data.genres,
        
    })
}

