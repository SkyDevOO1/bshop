import Typography from "@/ui/design/Typography/Typography";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  imageSize?: number;
  imageSrc?: string;
  imageAlt?: string;
  cardTitle: string;
  cardContent: string;
}

export const Card = ({
  imageSrc = "svg/Designer-girl.svg",
  imageAlt = "illustration d'une designeuse",
  imageSize = 130,
  cardContent,
  cardTitle,
}: Props) => {
  return (
    <>
      <div
        className={clsx(
          "w-full max-w-60 border rounded bg-white flex items-center flex-col p-4 space-y-2"
        )}
      >
        <Image
          height={imageSize}
          width={imageSize}
          src={`/assets/${imageSrc}`}
          alt={imageAlt}
        />
        <div className="text-center space-y-2">
          <Typography variant="h4" component="h3">
            {cardTitle}
          </Typography>
          <Typography variant="caption2" component="p" theme="gray">
            {cardContent}
          </Typography>
        </div>
      </div>
    </>
  );
};
