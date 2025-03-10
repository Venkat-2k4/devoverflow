import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import { Question, Tags } from "@/types/global";
import Link from "next/link";
import React from "react";
import TagCards from "./TagCards";
import Metric from "../Metric";
interface Props {
  question: Question;
}
const QuestionCard = ({
  question: {
    title,
    _id,

    tags,
    author,
    createdAt,
    upvotes,
    answers,
    views,
  },
}: Props) => {
  return (
    <div className=" card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.Question(_id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex w-full gap-2">
        {tags.map((tag: Tags) => (
          <TagCards key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      <div className="flex-between mt-6 flex-wrap gap-3">
        <Metric
          href={ROUTES.PROFILE(author._id)}
          imgUrl={author.imgurl}
          title={`• asked ${getTimeStamp(createdAt)}`}
          value={author.name}
          isAuthor={true}
          alt={author.name}
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
