import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchGetMovieVideo = (id) => {
    return api.get(`/movie/${id}/videos`)
}

export const useGetMovieVideoQuery =(id) =>{
    return useQuery({
        queryKey:['movie-video',id],
        queryFn: ()=>fetchGetMovieVideo(id),
        select: (result)=>result.data,
        staleTime: 300000,
    })
}