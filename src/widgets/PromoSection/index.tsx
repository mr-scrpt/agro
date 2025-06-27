import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/shared/ui/Section";
import Container from "@/shared/ui/Container";

export const PromoSection: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className } = props;

  // Hardcoded values for non-multilingual project
  const slogan = "Безпека та конфіденційність спілкування — пріоритет для нашої компанії. Все це надає нам Lecksis — месенджер майбутнього.";
  const link = "https://lecksis.com/profile/stinger";
  const text = "Ми у мессенджері";
  const name = "Lecksis";

  return (
    <Section id="promo" className={className ? `py-16 bg-gray-100 ${className}` : "py-16 bg-gray-100"}>
      <Container className="flex flex-col items-center justify-center p-[30px] gap-[15px] text-center md:p-[50px] lg:text-lg">
        <div>
          <Image src="/images/icon_lecksis.svg" alt="Lecksis Logo" width={200} height={200} />
        </div>
        <div className="text-base lg:text-lg">
          <div>{slogan}</div>
          <div>
            <span>{text} </span>
            <Link href={link}>{name}</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
