import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript interfaces effectively?",
    tags: [
      { _id: "101", tag: "TypeScript" },
      { _id: "102", tag: "Interfaces" },
    ],
    answers: [
      {
        _id: "a1",
        content:
          "You can use TypeScript interfaces to define the shape of objects.",
        author: {
          _id: "201",
          name: "John Doe",
        },
        createdAt: new Date("2024-05-16"),
      },
      {
        _id: "a2",
        content:
          "Interfaces help in enforcing type checking in TypeScript, ensuring type safety.",
        author: {
          _id: "202",
          name: "Jane Smith",
        },
        createdAt: new Date("2024-05-17"),
      },
    ],
    views: 100,
    upVotes: 10,
    author: {
      _id: "201",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
    },
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What are the best practices for React Hooks?",
    tags: [
      { _id: "103", tag: "React" },
      { _id: "104", tag: "Hooks" },
    ],
    answers: [
      {
        _id: "a3",
        content:
          "Some best practices for React Hooks include keeping hooks at the top level and using them inside functional components.",
        author: {
          _id: "203",
          name: "Alex Johnson",
        },
        createdAt: new Date("2024-02-01"),
      },
    ],
    views: 200,
    upVotes: 15,
    author: {
      _id: "202",
      name: "Jane Smith",
      picture: "https://example.com/janesmith.jpg",
    },
    createdAt: new Date("2024-04-14"),
  },
  {
    _id: "3",
    title: "How to optimize performance in Node.js applications?",
    tags: [
      { _id: "105", tag: "Node.js" },
      { _id: "106", tag: "Performance" },
    ],
    answers: [],
    views: 1500,
    upVotes: 10300000,
    author: {
      _id: "203",
      name: "Alex Johnson",
      picture: "https://example.com/alexjohnson.jpg",
    },
    createdAt: new Date("2024-03-14"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Link
          href="/ask-question"
          className="flex items-center justify-end  max-sm:w-full"
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Dev Overflow"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="We couldn't find any question matching your search. Please ask a question."
            link="/ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
}
