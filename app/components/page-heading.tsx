import { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface PageHeadingProps {
  children: ReactNode;
  className?: string;
}

export function PageHeading({ children, className }: PageHeadingProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

interface PageSubheadingProps {
  children: ReactNode;
  className?: string;
}

export function PageSubheading({ children, className }: PageSubheadingProps) {
  return (
    <h2 className={cn("text-lg leading-8 text-gray-600", className)}>
      {children}
    </h2>
  );
}
