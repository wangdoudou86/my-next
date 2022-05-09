import { NextPage } from "next"
import { getPosts } from 'lib/posts'

type postProps = {
    posts: Post[]
}

//静态页面
const PostIndex: NextPage<postProps> = (props)=>{
    return (
        <>
        <h1>列表</h1>
        {
            props.posts.map(p => <div key={p.id}>
                {p.id}
            </div>) 
        }
        </>
    )
}

export default PostIndex;

//后端获取数据
export const getStaticProps = async()=>{
    const postsData = await getPosts()
    return {
        props: { 
            posts: JSON.parse(JSON.stringify(postsData))
        }
    }
}