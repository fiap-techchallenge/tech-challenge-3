"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginFormData } from "@/lib/validations";
import * as yup from "yup";
import { toast } from "sonner";
import { useAuth } from "@/contexts/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { isAdmin, login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  useEffect(() => {
    // Redirect if already logged in
    if (isAdmin) {
      router.push("/admin");
    }
  }, [isAdmin, router]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      await loginSchema.validate(data, { abortEarly: false });

      // Show loading toast
      const loadingToast = toast.loading("Fazendo login...", {
        duration: Number.POSITIVE_INFINITY,
      });

      try {
        const success = await login(data.email, data.password);

        // Dismiss loading toast
        toast.dismiss(loadingToast);

        if (success) {
          // Show success message
          toast.success("Seja bem-vindo de volta!", {
            description: "Redirecionando para a dashboard...",
          });

          // Redirect to dashboard after a brief delay
          setTimeout(() => {
            router.push("/admin");
          }, 500);
        } else {
          toast.error("Credenciais inválidas", {
            description:
              "Por favor verifique suas credenciais e tente novamente",
          });
        }
      } catch (error) {
        toast.dismiss(loadingToast);
        toast.error("Falha ao entrar", {
          description: "Por favor tente novamente",
        });
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: Partial<LoginFormData> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path as keyof LoginFormData] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Entrar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@example.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" type="password" />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Fazendo login..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
