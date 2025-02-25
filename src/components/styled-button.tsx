import type { ReactNode } from "react"
import Link from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Plus, Eye } from "lucide-react"

type ButtonType = "readMore" | "backHome" | "viewBlog" | "newPost" | "primary" | "secondary"

interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  href?: string
  children: ReactNode
  buttonType?: ButtonType
  icon?: boolean
  className?: string
}

export function StyledButton({
  href,
  children,
  buttonType = "primary",
  icon = true,
  className,
  ...props
}: StyledButtonProps) {
  const getButtonStyles = (): { variant: ButtonProps["variant"]; icon: ReactNode | null; classes: string } => {
    switch (buttonType) {
      case "readMore":
        return {
          variant: "default",
          icon: icon ? <ArrowRight className="ml-2 h-4 w-4" /> : null,
          classes: "bg-blue-600 hover:bg-blue-700 text-white",
        }
      case "backHome":
        return {
          variant: "outline",
          icon: icon ? <ArrowLeft className="mr-2 h-4 w-4" /> : null,
          classes: "border-blue-300 hover:bg-blue-50 text-blue-600 hover:text-blue-700",
        }
      case "viewBlog":
        return {
          variant: "secondary",
          icon: icon ? <Eye className="mr-2 h-4 w-4" /> : null,
          classes: "bg-green-100 hover:bg-green-200 text-green-700",
        }
      case "newPost":
        return {
          variant: "default",
          icon: icon ? <Plus className="mr-2 h-4 w-4" /> : null,
          classes: "bg-purple-600 hover:bg-purple-700 text-white",
        }
      case "secondary":
        return {
          variant: "secondary",
          icon: null,
          classes: "bg-gray-100 hover:bg-gray-200 text-gray-700",
        }
      case "primary":
      default:
        return {
          variant: "default",
          icon: null,
          classes: "bg-blue-600 hover:bg-blue-700 text-white",
        }
    }
  }

  const { variant, icon: buttonIcon, classes } = getButtonStyles()

  const buttonContent = (
    <>
      {buttonType === "backHome" && buttonIcon}
      {buttonType === "viewBlog" && buttonIcon}
      {buttonType === "newPost" && buttonIcon}
      <span className="mx-1">{children}</span>
      {buttonType === "readMore" && buttonIcon}
    </>
  )

  const buttonClasses = cn(
    "font-medium transition-all duration-200 flex items-center justify-center gap-2",
    classes,
    className,
  )

  if (href) {
    return (
      <Button variant={variant} className={buttonClasses} asChild {...props}>
        <Link href={href}>{buttonContent}</Link>
      </Button>
    )
  }

  return (
    <Button variant={variant} className={buttonClasses} {...props}>
      {buttonContent}
    </Button>
  )
}

