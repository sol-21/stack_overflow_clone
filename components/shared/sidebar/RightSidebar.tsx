import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "../RenderTags";

type questionsTYpe = {
  _id: number;
  question: string;
};

type popularTagsType = {
  _id: number;
  tag: string;
  totalQuestions: number;
  showCount: boolean;
};

const RightSidebar = () => {
  const topQuestions: questionsTYpe[] = [
    {
      _id: 1,
      question:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: 2,
      question: "Is it only me or the font is bolder than necessary?",
    },
    {
      _id: 3,
      question: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: 4,
      question: "Can I get the course for free?",
    },
    {
      _id: 5,
      question: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const popularTags: popularTagsType[] = [
    {
      _id: 1,
      tag: "NEXTJS",
      totalQuestions: 5,
      showCount: true,
    },
    {
      _id: 2,
      tag: "TYPESCRIPT",
      totalQuestions: 4,
      showCount: true,
    },
    {
      _id: 3,
      tag: "NODEJS",
      totalQuestions: 2,
      showCount: true,
    },
    {
      _id: 4,
      tag: "REACT",
      totalQuestions: 4,
      showCount: true,
    },
    {
      _id: 5,
      tag: "PRISMA",
      totalQuestions: 3,
      showCount: true,
    },
  ];
  return (
    <section
      className="background-light900_dark200 light-border
      custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  
      overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => {
            return (
              <Link
                href={`${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.question}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return <RenderTags {...tag} key={tag._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
