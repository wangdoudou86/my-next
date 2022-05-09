import { NextApiHandler } from "next";
import { getPosts } from "../../../lib/posts";



const Posts: NextApiHandler = async (req, res)=>{
 let data = await getPosts()
  res.status(200).json(data)
}

export default Posts;