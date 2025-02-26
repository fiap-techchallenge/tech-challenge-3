"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";
import { getPost } from "@/api/get-post";
import { type GetPostResponse } from "@/api/get-post/response";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [fetchedPosts, setPosts] = useState<GetPostResponse | null>(null);

  const fetchPost = async (): Promise<void> => {
    try {
      const post = await getPost(slug);
      setPosts(post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  if (!fetchedPosts) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <StyledButton href="/" buttonType="backHome">
            Voltar para a página inicial
          </StyledButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8">
        <article className="mx-auto max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{fetchedPosts?.title}</h1>
            <p className="text-lg font-medium">
              Escrito por {fetchedPosts?.author}
            </p>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {fetchedPosts?.content}
            </div>
          </div>
          <div className="mt-8">
            <StyledButton href="/" buttonType="backHome">
              Voltar para a página inicial
            </StyledButton>
          </div>
        </article>
      </main>
    </div>
  );
}
