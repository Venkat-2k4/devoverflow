"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  const handleCreateQuestion = () => {};
  return (
    <div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-10"
          onSubmit={form.handleSubmit(handleCreateQuestion)}
        >
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="background-light700_dark300 light-border-2 no-focus text-dark300_light700 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Be specific and imagine you&apos;re asking a question to
                  another person.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="content"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Detailed explanation of your problem{" "}
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>Editor</FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Introduce the problem and expand on what you&apos;ve put in
                  the title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="tags"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Tags <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="">
                    <Input
                      className="background-light700_dark300 light-border-2 no-focus text-dark300_light700 min-h-[56px] border"
                      {...field}
                    />
                    Tags
                  </div>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 tags to describe what your question is about. You
                  need to press enter to add a tag
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default QuestionForm;
