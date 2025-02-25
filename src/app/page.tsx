"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePosts } from "@/contexts/posts-context";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { posts } = usePosts();

  const filteredPosts = posts.filter((post) => {
    const searchContent =
      `${post.title} ${post.content} ${post.author}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto py-8">
        <div className="mb-8 flex items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Procurar posts..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhum post encontrado
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="space-y-4 pt-6">
                  <h2 className="text-2xl font-bold">{post.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {post.content}
                  </p>
                  <p className="text-sm font-medium">
                    Escrito por {post.author}
                  </p>
                </CardContent>
                <CardFooter>
                  <StyledButton
                    href={`/posts/${post.slug}`}
                    buttonType="readMore"
                    className="w-full"
                  >
                    Ver post
                  </StyledButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
