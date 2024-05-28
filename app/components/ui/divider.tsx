import clsx from "clsx";

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<"hr">) {
  return (
    <hr
      {...props}
      className={clsx(
        className,
        "w-full border-t",
        soft
          ? "border-zinc-950/5 dark:border-white/5"
          : "border-zinc-950/10 dark:border-white/10",
      )}
      dir="rtl" // Add this attribute to support RTL
    />
  );
}
