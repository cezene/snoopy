import Image from "next/image";

import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";

import { Progress } from "./ui/progress";

export const Category = ({ category }: CategoryProps) => {
  const {
    circleBg,
    text: { main, count },
    progress: { indicator },
    icon,
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
  topCategoryStyles.default;
  const getCategoryName = () => {
    if (category.name === "undefined") {
      return "Error";
    }
    return category.name;
  };
  const displayCategory = category.name !== "undefined";

  return (
    <div>
      {displayCategory && (
        <div className={cn("!gap-[18px] flex !p-4 rounded-xl, bg-stone-900")}>
          <figure
            className={cn("flex-center !size-10 rounded-full !p-3", circleBg)}
          >
            <Image src={icon} width={20} height={20} alt={category.name} />
          </figure>
          <div className="flex w-full flex-1 flex-col !gap-2">
            <div className="text-14 flex justify-between">
              <h2 className={cn("font-medium", main)}>{getCategoryName()}</h2>
              <h3 className={cn("font-normal", count)}>{category.count}</h3>
            </div>
            <Progress
              value={(category.count / category.totalCount) * 100}
              className={cn("!h-2 w-full")}
              indicatorClassName={cn("!h-2 w-full", indicator)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
