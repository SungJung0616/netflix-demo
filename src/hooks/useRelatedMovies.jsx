import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchRelatedMovies = (id) => {
    return api.get(`/movie/${id}/recommendations`)
}

export const useRelatedMovieQuery =(id) =>{
    return useQuery({
        queryKey:['movie-related',id],
        queryFn: ()=>fetchRelatedMovies(id),
        select: (result)=>result.data,
        staleTime: 300000,
    })
}