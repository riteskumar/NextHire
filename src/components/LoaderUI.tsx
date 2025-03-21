import { LoaderIcon } from "lucide-react";
import Image from "next/image";

function LoaderUI() {
  // h-16 + 1 for border in navbar => 65px
  return (
    <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center">
    <Image
      src="loader.svg"
      alt="loader"
      width={40}
      height={3240}
      className="h-8 w-8 animate-spin text-muted-foreground"
    />
 
  </div>
  );
}
export default LoaderUI;
