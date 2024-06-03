import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchnowplayingMovies = () => {
    return api.get(`/movie/now_playing`)
}

export const useNowplayingMoviesQuery =() =>{
    return useQuery({
        queryKey:['movie-nowPlaying'],
        queryFn: fetchnowplayingMovies,
        select: (result)=>result.data,
    })
}

