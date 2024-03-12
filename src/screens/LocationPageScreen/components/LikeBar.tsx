import { HorizontalStack, IconButton } from "@/ui/atoms";
import { Heart } from "@phosphor-icons/react/dist/ssr";

interface LikeBarProps {
  liked?: boolean;
  likesNumber: number;
}

export const LikeBar = ({ liked, likesNumber }: LikeBarProps) => {
  return (
    <HorizontalStack className="items-center justify-end gap-2">
      <p>{likesNumber}</p>
      <IconButton
        icon={
          <Heart className="text-main-red" weight={liked ? "fill" : "bold"} />
        }
      />
    </HorizontalStack>
  );
};
