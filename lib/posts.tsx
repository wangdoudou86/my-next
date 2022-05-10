import fs, { promises as fsPromises } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from 'marked'
//这个文件相当于去数据库拿数据

//获取markdown目录在此项目的路径
const markdownDir = path.join(process.cwd(), "markdown");

//获取所有文章的内容
export const getPosts = async () => {
  const fileNames = await fsPromises.readdir(markdownDir);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/g, "");
    const fullPath = path.join(markdownDir, fileName);

    const text = fs.readFileSync(fullPath, "utf-8");
    const result = matter(text);
    const {
      data: { title, date },
      content,
    } = result;
    return {
      id,
      title,
      date,
    };
  });
  return posts;
};

//获取所有文章的id
export const getPostIds = async () => {
  const fileNames = await fsPromises.readdir(markdownDir);
  return fileNames.map((fileName) => fileName.replace(/\.md$/g, ""));
};

//获取每篇文章的内容
export const getPostContent = async (id: string) => {
  const fullPath = path.join(markdownDir, id + ".md");
  const text = fs.readFileSync(fullPath, "utf-8");
  const { data: { title, date }, content } = matter(text);
  const htmlContent = marked.parse(content)
  return JSON.parse(
    JSON.stringify({
      id,
      title,
      date,
      content,
      htmlContent
    })
  );
};
