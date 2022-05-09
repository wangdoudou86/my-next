import fs, {promises as fsPromises} from 'fs';
import path from "path";
import matter from 'gray-matter';

export const getPosts = async ()=>{
    //得到
    const markdownDir = path.join(process.cwd(), 'markdown')
    const fileNames = await fsPromises.readdir(markdownDir)
    // console.log(fileNames);
    const posts = fileNames.map(fileName =>{
        const id = fileName.replace(/\.md$/g, '')
        const fullPath = path.join(markdownDir, fileName)
        
        const text = fs.readFileSync(fullPath, 'utf-8')
        const result = matter(text)
        const { data: {title, date}, content} = result

        return {
            id, title, date
        }

    })
    return posts
}