import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface NoResultProps {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: NoResultProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        alt="No result found"
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        alt="No result found"
        className="hidden object-contain dark:block"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium  mt-5 min-h-[46px] rounded-lg bg-primary-500 py-3  text-light-900 hover:bg-primary-500">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
