import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchReviewMovies = (id) => {
    return api.get(`/movie/${id}/reviews`)
}

export const useReviewMovieQuery =(id) =>{
    return useQuery({
        queryKey:['movie-review',id],
        queryFn: ()=>fetchReviewMovies(id),
        select: (result)=>result.data,
        staleTime: 300000,
    })
}