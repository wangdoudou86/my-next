import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";
import Link from "next/link";

const PostIndex: NextPage = () => {
  const { isLoading, posts } = usePosts();
  return (
    <>
      <h1>列表</h1>
      {isLoading ? (
        <div>加载中...</div>
      ) : posts.length > 0 ? (
        posts.map((p) => (
          <div key={p.id}>
            <Link href={`/posts/${p.id}`}>
              <a>{p.id}</a>
            </Link>
          </div>
        ))
      ) : (
        <div>空</div>
      )}
    </>
  );
};

export default PostIndex;
