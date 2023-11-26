import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post } from '@/components/posts/types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): Post | null {
  const slug = postIdentifier.replace(/\.md$/, ''); // remove file extension if it exists
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
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
  } catch (e) {
    return null;
  }
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles
    .map((postFile) => getPostData(postFile))
    .filter(Boolean) as Post[];
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
