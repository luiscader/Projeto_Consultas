import Image from 'next/image';

type LogoProps = {
  height: number;
  width: number;
  className?: string;
};
export function Logo({ height, width, className }: LogoProps) {
  return (
    <Image
      src={`/images/logo/Logo.png`}
      alt={'Logo'}
      width={`${width}`}
      height={`${height}`}
      className={`${className}`}
    />
  );
}
