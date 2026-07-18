import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext()

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);
    const value = {loading, setLoading, posts, setPosts, page, setPage, totalPages, setTotalPages ,fetchBlogs, handlePageChange};

    async function fetchBlogs(page = 1){
        
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        setPage(data.page);
        setPosts(updatedPosts);
        setTotalPages(data.totalPages);
    }
    catch(err){
        console.log({"Error while fetching blogs": err});
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }

    setLoading(false);
}
function handlePageChange(newPage){
        setPage(newPage);
        fetchBlogs(newPage)
}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );  
}
