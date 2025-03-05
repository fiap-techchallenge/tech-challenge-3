"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { postSchema, type PostFormData } from "@/lib/validations";
import * as yup from "yup";
import { feedback } from "@/lib/feedback";
import { usePosts } from "@/contexts/posts-context";
import ProtectedRoute from "@/components/protected-route";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";
import { newPost } from "@/api/new-post";

export default function NewPost() {
  const router = useRouter();
  const { addPost } = usePosts();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<PostFormData>>({});

  const addNewPost = async (data: PostFormData) => {
    try {
      const response = await newPost(data);
      addPost(response);
      return response;
    } catch (error) {
      throw new Error("Erro ao criar postagem");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
    };

    // Verificação de dados antes de enviar para o schema
    if (!data.title || !data.content || !data.author) {
      feedback.error(
        "Erro ao criar postagem",
        "Todos os campos são obrigatórios."
      );
      setIsLoading(false);
      return;
    }

    try {
      // Validar dados antes de enviar
      await postSchema.validate(data, { abortEarly: false });

      await feedback.action(
        async () => {
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const postResponse = await addNewPost(data);

          if (postResponse) {
            return;
          }
          throw new Error("Falha ao criar postagem");
        },
        {
          loadingMessage: "Criando postagem...",
          successMessage: `Postagem "${data.title}" criada com sucesso!`,
          successDescription:
            "Você será redirecionado para a página de administração",
          onSuccess: () => {
            router.push("/admin");
          },
        }
      );
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: Partial<PostFormData> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path as keyof PostFormData] = err.message;
          }
        });
        setErrors(validationErrors);
        feedback.error(
          "Erro ao criar postagem",
          "Por favor, corrija os erros e tente novamente"
        );
      } else {
        feedback.error(
          "Erro ao criar postagem",
          "Algo deu errado ao salvar seu post."
        );
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
              <CardTitle>Criar nova postagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titulo</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Digite o titulo da postagem"
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive">{errors.title}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Conteúdo</Label>
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Digite o conteúdo da postagem"
                    className="min-h-[200px]"
                  />
                  {errors.content && (
                    <p className="text-sm text-destructive">{errors.content}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Autor</Label>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Digite o nome do autor"
                  />
                  {errors.author && (
                    <p className="text-sm text-destructive">{errors.author}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <StyledButton
                    buttonType="secondary"
                    onClick={() => router.push("/admin")}
                  >
                    Cancel
                  </StyledButton>
                  <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? "Criando..." : "Criar postagem"}
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
