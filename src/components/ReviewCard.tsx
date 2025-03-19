
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  id: string;
  author: string;
  avatarUrl?: string;
  content: string;
  rating: number;
  date: string;
  variant?: "default" | "compact";
}

const ReviewCard = ({
  id,
  author,
  avatarUrl,
  content,
  rating,
  date,
  variant = "default"
}: ReviewCardProps) => {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 h-full movie-card-shadow border border-border/40",
      variant === "compact" && "hover:border-accent/20"
    )}>
      <CardHeader className={cn(
        "pb-2",
        variant === "compact" && "px-4 py-3"
      )}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar className={cn(
              "border border-border",
              variant === "compact" && "h-8 w-8"
            )}>
              <AvatarImage src={avatarUrl} alt={author} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium leading-none">{author}</div>
              <div className="text-xs text-muted-foreground mt-1">{formattedDate}</div>
            </div>
          </div>
          <StarRating initialRating={rating} size={variant === "compact" ? 14 : 16} />
        </div>
      </CardHeader>
      <CardContent className={cn(
        "text-sm",
        variant === "compact" && "px-4 pb-4 pt-1"
      )}>
        <p className={cn(
          "text-muted-foreground",
          variant === "compact" ? "line-clamp-2" : "line-clamp-4"
        )}>
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
