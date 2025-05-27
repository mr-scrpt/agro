import React from "react";
import Image from "next/image";
import { companyInfo } from "@/shared/config/company";

interface LogoProps {
  variant?: "default" | "light";
}

export const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  const textColor = variant === "light" ? "text-white" : "text-gray-800";

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/images/logo_clear.svg"
          alt="Logo"
          width={80}
          height={40}
          className="w-[60px] md:w-[80px] h-auto"
        />
      </div>
      <div className="flex flex-col">
        <div className={`text-lg md:text-xl font-bold leading-tight ${textColor}`}>
          {companyInfo.shortName}
        </div>
        <div className={`text-[10px] md:text-sm leading-tight ${textColor} max-w-[160px] md:max-w-none`}>
          {companyInfo.slogan}
        </div>
      </div>
    </div>
  );
};

export default Logo;

