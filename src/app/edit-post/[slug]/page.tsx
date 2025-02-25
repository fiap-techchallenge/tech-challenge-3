"use client";

import type React from "react";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { postSchema, type PostFormData } from "@/lib/validations";
import * as yup from "yup";
import { usePosts } from "@/contexts/posts-context";
import ProtectedRoute from "@/components/protected-route";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";

export default function EditPost() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, updatePost } = usePosts();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<PostFormData>>({});
  const [post, setPost] = useState(getPostBySlug(slug as string));

  if (!post) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <StyledButton href="/admin" buttonType="backHome">
              Voltar ao painel de administração
            </StyledButton>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
    };

    try {
      await postSchema.validate(data, { abortEarly: false });

      // Show loading toast
      const loadingToast = toast.loading("Atualizando postagem...", {
        duration: Number.POSITIVE_INFINITY,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update post
      updatePost(slug as string, data);

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success(`Postagem "${data.title}" atualizada com sucesso!`, {
        description: "Redirecionando para a página de administração...",
        duration: 5000,
      });

      // Wait a bit before redirecting
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/admin");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: Partial<PostFormData> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path as keyof PostFormData] = err.message;
          }
        });
        setErrors(validationErrors);
        toast.error("Erro ao atualizar postagem", {
          description: "Por favor, corrija os erros e tente novamente",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto py-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Editar postagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" name="title" defaultValue={post.title} />
                  {errors.title && (
                    <p className="text-sm text-destructive">{errors.title}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Conteúdo</Label>
                  <Textarea
                    id="content"
                    name="content"
                    defaultValue={post.content}
                    className="min-h-[200px]"
                  />
                  {errors.content && (
                    <p className="text-sm text-destructive">{errors.content}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Autor</Label>
                  <Input id="author" name="author" defaultValue={post.author} />
                  {errors.author && (
                    <p className="text-sm text-destructive">{errors.author}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <StyledButton
                    buttonType="secondary"
                    onClick={() => router.push("/admin")}
                  >
                    Cancelar
                  </StyledButton>
                  <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? "Salvando..." : "Salvar alterações"}
                  </StyledButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </ProtectedRoute>
  );
}
