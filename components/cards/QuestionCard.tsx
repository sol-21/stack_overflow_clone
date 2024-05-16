import React from "react";
import Link from "next/link";
import RenderTags from "../shared/RenderTags";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    tag: string;
  }[];
  answers: Array<object>;
  views: number;
  upVotes: number;
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  answers,
  views,
  upVotes,
  author,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper  dark:dark-gradient flex flex-col gap-4 rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* {If Signed in add edit delete actions} */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTags _id={tag._id} tag={tag.tag} key={tag._id} />
        ))}
      </div>
      <div className=" flex-between mt-6  w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="author"
          value={author.name}
          title={`| asked ${getTimestamp(createdAt)}`}
          textStyles="body-medium text-dark400_light700"
          href={`/profile/${author._id}`}
          isAuthor
        />
        <div className="mak-sm:justify-start flex items-center gap-3 max-sm:flex-wrap">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatNumber(upVotes)}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />

          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="messages"
            value={formatNumber(answers.length)}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(views)}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
