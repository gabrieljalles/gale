"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { QuickSearchOptionProps } from "@/constants/quick-search";

const QuickSearchOptions = ({
  quickSearchOptions,
}: {
  quickSearchOptions: QuickSearchOptionProps[];
}) => {
  const [selectedQuickSearchOption, setSelectedQuickSearchOption] =
    useState("");

  const handleSelect = (title: string) => {
    setSelectedQuickSearchOption(title);
  };

  return (
    <div className="flex gap-3 m-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {quickSearchOptions?.map((option) => (
        <Button
          className={`gap-2 font-bold border text-md hover:bg-[#FCC221]
              ${selectedQuickSearchOption === option.title ? "bg-[#FCC221]" : ""}
            `}
          variant="secondary"
          onClick={() => handleSelect(option.title)}
          key={option.title}
          asChild
        >
          <Link
            href={
              option.title.toLowerCase() === "todos"
                ? "/menu"
                : `/menu?category=${option.title}`
            }
          >
            <Image
              src={option.imageUrl}
              width={18}
              height={18}
              alt={option.alt}
            />
            {option.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default QuickSearchOptions;
