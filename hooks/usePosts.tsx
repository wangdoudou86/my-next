import { useEffect, useState } from "react";
import axios from 'axios'

type Post = {
    id: string;
    date: string;
    title: string;
  }
export const usePosts = ()=>{
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get('/api/v1/posts').then(res=>{
            setPosts(res.data)
            setLoading(false)
        }, ()=>{
            setLoading(false)
        })
    }, [])
    return {
        posts,
        setPosts,
        isLoading,
        setLoading
    }
}