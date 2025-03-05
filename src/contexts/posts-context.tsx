"use client";

import type React from "react";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  slug: string;
  createdAt?: string;
};

interface PostsContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  addPost: (post: Omit<Post, "id" | "slug" | "createdAt">) => void;
  updatePost: (slug: string, updatedPost: Partial<Post>) => void;
  deletePost: (id: number) => void;
  getPostBySlug: (slug: string) => Post | undefined;
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Learn how to build modern web applications with Next.js. This comprehensive guide will walk you through the basics and advanced concepts of Next.js development.",
    author: "John Doe",
    slug: "getting-started-with-nextjs",
    createdAt: "2024-02-23",
  },
  {
    id: 2,
    title: "The Power of Server Components",
    content:
      "Explore the benefits of React Server Components in Next.js. Discover how they can improve your application's performance and developer experience.",
    author: "Jane Smith",
    slug: "power-of-server-components",
    createdAt: "2024-02-22",
  },
  {
    id: 3,
    title: "Styling with Tailwind CSS",
    content:
      "Master the art of styling with utility-first CSS. Learn how to create beautiful, responsive designs efficiently using Tailwind CSS.",
    author: "Mike Johnson",
    slug: "styling-with-tailwind",
    createdAt: "2024-02-21",
  },
];

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Omit<Post, "id" | "slug" | "createdAt">) => {
    if (!post.title) {
      console.error("Title is required to create a post");
      return;
    }

    const newPost: Post = {
      id: Math.max(0, ...posts.map((p) => p.id)) + 1,
      slug: post.title.toLowerCase().replace(/\s+/g, "-"),
      createdAt: new Date().toISOString().split("T")[0],
      ...post,
    };
    setPosts((currentPosts) => [...currentPosts, newPost]);
  };

  const updatePost = (slug: string, updatedPost: Partial<Post>) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.slug === slug ? { ...post, ...updatedPost } : post
      )
    );
  };

  const deletePost = (id: number) => {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
  };

  const getPostBySlug = (slug: string) => {
    return posts.find((post) => post.slug === slug);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        addPost,
        updatePost,
        deletePost,
        getPostBySlug,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts deve ser usado dentro de um PostsProvider");
  }
  return context;
}
