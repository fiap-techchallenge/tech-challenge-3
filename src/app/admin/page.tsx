"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DeleteModal } from "@/components/delete-modal";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Search,
} from "lucide-react";
import Link from "next/link";
import { feedback } from "@/lib/feedback";
import { useAuth } from "@/contexts/auth-context";
import { usePosts, type Post } from "@/contexts/posts-context";
import { Navbar } from "@/components/navbar";
import { StyledButton } from "@/components/styled-button";

type SortConfig = {
  key: keyof Post;
  direction: "asc" | "desc";
} | null;

export default function AdminDashboard() {
  const router = useRouter();
  const { logout } = useAuth();
  const { posts, deletePost } = usePosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const handleSort = (key: keyof Post) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        if (current.direction === "asc") {
          return { key, direction: "desc" };
        }
        return null;
      }
      return { key, direction: "asc" };
    });
  };

  const getSortIcon = (key: keyof Post) => {
    if (sortConfig?.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    );
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (!sortConfig) return 0;

    const { key, direction } = sortConfig;
    const aValue = a[key];
    const bValue = b[key];

    if (aValue === undefined || bValue === undefined) return 0;
    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredPosts = sortedPosts.filter((post) => {
    const searchContent =
      `${post.title} ${post.content} ${post.author}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  const handleDeleteConfirm = async () => {
    if (!postToDelete) return;

    setIsDeleting(true);

    await feedback.action(
      async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        deletePost(postToDelete.id);
      },
      {
        loadingMessage: "Excluindo postagem...",
        successMessage: `Postagem "${postToDelete.title}" excluída com sucesso!`,
        successDescription: "A postagem foi removida permanentemente",
        onSuccess: () => {
          setPostToDelete(null);
        },
      }
    );

    setIsDeleting(false);
  };

  const handleLogout = () => {
    logout();
    feedback.success("Desconectado com sucesso", "Até a próxima!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar showAdminLink={false} />
      <div className="container mx-auto py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Painel</h1>
            <p className="text-muted-foreground">
              Gerencie suas postagens do blog aqui.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <StyledButton href="/" buttonType="viewBlog">
              Ver Postagens
            </StyledButton>
            <StyledButton href="/new-post" buttonType="newPost">
              Nova Postagem
            </StyledButton>
            <Button variant="destructive" onClick={handleLogout}>
              Sair
            </Button>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4">
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

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("title")}
                    className="flex items-center font-semibold hover:text-primary"
                  >
                    Título {getSortIcon("title")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("author")}
                    className="flex items-center font-semibold hover:text-primary"
                  >
                    Autor {getSortIcon("author")}
                  </Button>
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("createdAt")}
                    className="flex items-center font-semibold hover:text-primary"
                  >
                    Created {getSortIcon("createdAt")}
                  </Button>
                </TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1 md:hidden">
                      {post.createdAt}
                    </div>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.createdAt}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/posts/${post.slug}`}>
                            Ver Postagens
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/edit-post/${post.slug}`}>Editar</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => setPostToDelete(post)}
                        >
                          Deletar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPosts.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground"
                  >
                    Nenhuma postagem encontrada
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <DeleteModal
        title="Delete Post"
        description={`Tem certeza de que deseja excluir "${postToDelete?.title}"? Esta ação não pode ser desfeita.`}
        open={!!postToDelete}
        onClose={() => setPostToDelete(null)}
        onConfirm={handleDeleteConfirm}
        isLoading={isDeleting}
      />
    </div>
  );
}
