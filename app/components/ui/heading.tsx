import { cn } from "~/lib/utils";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

// export function Heading({ className, level = 1, ...props }: HeadingProps) {
//   let Element: `h${typeof level}` = `h${level}`;

//   return (
//     <Element
//       {...props}
//       className={clsx(
//         className,
//         "text-right text-2xl/8 font-semibold text-zinc-950 dark:text-white sm:text-xl/8",
//       )}
//     />
//   );
// }

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  let Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        "text-right text-2xl/8 font-semibold text-zinc-950 dark:text-white sm:text-xl/8",
        className,
      )}
    />
  );
}

// export function Subheading({ className, level = 2, ...props }: HeadingProps) {
//   let Element: `h${typeof level}` = `h${level}`;

//   return (
//     <Element
//       {...props}
//       className={clsx(
//         className,
//         "text-right text-base/7 font-semibold text-zinc-950 dark:text-white sm:text-sm/6",
//       )}
//     />
//   );
// }

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  let Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        "text-right text-base/7 font-semibold text-zinc-950 dark:text-white sm:text-sm/6",
        className,
      )}
    />
  );
}
