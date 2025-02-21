import Image from "next/image";

type LogoProps = {
  height: number;
  width: number;
};
export function Logo({ height, width }: LogoProps) {
  return (
    <Image
      src={`/images/logo/Logo.png`}
      alt={"Logo"}
      width={`${width}`}
      height={`${height}`}
    />
  );
}
