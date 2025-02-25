"use client";

import { useParams } from "next/navigation";
import { usePosts } from "@/contexts/posts-context";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = usePosts();
  const post = getPostBySlug(slug as string);

  if (!post) {
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
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-lg font-medium">Escrito por {post.author}</p>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {post.content}
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
