import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post } from '@/components/posts/types';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug,
    content,
    ...data,
  };
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
  // @ts-ignore;
  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
