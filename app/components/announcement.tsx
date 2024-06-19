import { cn } from "~/lib/utils";

interface AnnouncementProps {
  className?: string;
}

export default function Announcement({ className }: AnnouncementProps) {
  return (
    <div
      className={cn(
        "mt-6 flex w-full flex-col items-center rounded-lg border bg-blue-600 py-1 text-lg text-white",
        className,
      )}
    >
      <p>יום שלישי פעמיים כי טוב</p>
      <h3 className="mt-2 font-greek text-5xl">HAPPY HOUR</h3>
      <p>משעה 15:00 - 17:00 משקה שני בחינם!</p>
    </div>
  );
}
