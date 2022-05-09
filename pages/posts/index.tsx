import { NextPage } from "next"
import { usePosts } from "hooks/usePosts";

const PostIndex: NextPage = ()=>{
    const {isLoading, posts} = usePosts()
    return (
        <>
        <h1>列表</h1>
        {
            isLoading ? <div>加载中...</div> :
            posts.length >0 ?
            posts.map(p => <div key={p.id}>
                {p.id}
            </div>) : <div>空</div>
        }
        </>
    )
}

export default PostIndex;