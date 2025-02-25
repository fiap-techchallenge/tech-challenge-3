import { toast } from "sonner";

type FeedbackOptions = {
  duration?: number;
  onComplete?: () => void;
};

export const feedback = {
  loading: (message: string) =>
    toast.loading(message, {
      duration: Number.POSITIVE_INFINITY,
    }),

  success: (title: string, description?: string, options?: FeedbackOptions) => {
    toast.success(title, {
      description,
      duration: options?.duration ?? 5000,
      onClose: options?.onComplete,
    });
  },

  error: (title: string, description?: string, options?: FeedbackOptions) => {
    toast.error(title, {
      description,
      duration: options?.duration ?? 5000,
      onClose: options?.onComplete,
    });
  },

  promise: async <T>(
    promise: Promise<T>,
    {
      loading = "Carregando...",
      success = "Sucesso!",
      error = "Erro!",
    }: {
      loading?: string;
      success?: string;
      error?: string;
    }
  ) =>
    toast.promise(promise, {
      loading,
      success,
      error,
    }),

  action: async (
    action: () => Promise<void>,
    {
      loadingMessage,
      successMessage,
      successDescription,
      onSuccess,
    }: {
      loadingMessage: string;
      successMessage: string;
      successDescription?: string;
      onSuccess?: () => void;
    }
  ) => {
    const loadingToast = toast.loading(loadingMessage, {
      duration: Number.POSITIVE_INFINITY,
    });

    try {
      await action();
      toast.dismiss(loadingToast);

      toast.success(successMessage, {
        description: successDescription,
        duration: 5000,
        onClose: onSuccess,
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Ocorreu um erro", {
        description: "Por favor, tente novamente mais tarde",
      });
    }
  },
};
