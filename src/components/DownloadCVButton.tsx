import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Easy to update PDF links - just change the paths here
const CV_LINKS = {
  french: "https://drive.google.com/file/d/18_VgU6GEWYiYqLU9ccrQsib_7RpVMaGO/view?usp=sharing",
  english: "https://drive.google.com/file/d/1Q8RYm_dO_4brqg8ya_pAaKqRaNj9iR1a/view?usp=sharing",
};

interface DownloadCVButtonProps {
  size?: "default" | "sm" | "lg";
  className?: string;
}

export const DownloadCVButton = ({
  size = "default",
  className = "",
}: DownloadCVButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={size} className={`gap-2 ${className}`}>
          <Download className="w-4 h-4" />
          Download CV
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="min-w-[180px] bg-card border-border rounded-xl shadow-lg z-50"
      >
        <DropdownMenuItem asChild className="cursor-pointer rounded-lg">
          <a
            href={CV_LINKS.french}
            download="Mariem_Abouda_CV_FR.pdf"
            className="flex items-center gap-2 px-3 py-2"
          >
            <Download className="w-4 h-4" />
            Download CV (French)
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer rounded-lg">
          <a
            href={CV_LINKS.english}
            download="Mariem_Abouda_CV_EN.pdf"
            className="flex items-center gap-2 px-3 py-2"
          >
            <Download className="w-4 h-4" />
            Download CV (English)
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
