import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchRelatedMoviesPage = (id,page) => {
    return api.get(`/movie/${id}/recommendations?page=${page}`)
}

export const useRelatedMoviePageQuery =(id,page) =>{
    return useQuery({
        queryKey:['movie-related-page',id,page],
        queryFn: ()=>fetchRelatedMoviesPage(id,page),
        select: (result)=>result.data,
        staleTime: 300000,
    })
}