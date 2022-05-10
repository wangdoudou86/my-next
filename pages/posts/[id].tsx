import { getPostContent, getPostIds } from "lib/posts";
import { NextPage } from "next";

type Post = {
  id: string;
  date: string;
  title: string;
  content: string;
  htmlContent: string;
};

type postProps = {
  post: Post;
};
const postsShow: NextPage<postProps> = (props) => {
  const { post } = props;
  return (
    <>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}></article>
    </>
  );
};

export default postsShow;

export const getStaticPaths = async () => {
  const idList = await getPostIds();
  return {
    paths: idList.map((id) => ({ params: { id } })),
    fallback: true,
  };
};

export const getStaticProps = async (x: any) => {
  // x是{ params: { id: '第一篇文章' }, ....}的对象

  const id = x.params.id;
  const post = await getPostContent(id);

  return {
    props: {
      post,
    },
  };
};
