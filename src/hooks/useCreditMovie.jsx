import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchCreditMovies = (id) => {
    return api.get(`/movie/${id}/credits`)
}

export const useCreditMoviesQuery =(id) =>{
    return useQuery({
        queryKey:['movie-credit',id],
        queryFn: ()=>fetchCreditMovies(id),
        select: (result)=>result.data,
        staleTime: 300000,
    })
}