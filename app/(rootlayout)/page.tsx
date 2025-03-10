import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      imgurl:
        "data:image/jpeg;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-06-16"),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      imgurl:
        "data:image/jpeg;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  // const filteredQuestions = questions.filter((question) =>
  //   question.title.toLowerCase().includes(query?.toLowerCase())
  // );

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesFilter && matchesQuery;
  });

  return (
    <>
      <section
        className="flex w-full flex-col-reverse
      justify-between gap-4 sm:flex-row sm:items-center
       "
      >
        <h1 className="h1-bold text-dark100_light900">All questions</h1>
        <Button
          className="primary-gradient min-h-[46px] 
          px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11 ">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="search Questions "
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
