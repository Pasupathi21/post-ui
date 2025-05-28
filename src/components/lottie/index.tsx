import { useLottie } from "lottie-react";
import {cn} from '@/lib/utils'
interface LottieProps {
  animationData: Record<string, any>;
  loop?: boolean;
  className?: string
}
export function Lottie({ animationData, loop = true, className = ""}: LottieProps) {
  const { View } = useLottie({ animationData, loop });
  return (
    <>
      <div className={cn("h-[20px] w-[20px]", className)}>{View}</div>
    </>
  );
}
