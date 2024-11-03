import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";

const Language = ({
  handleHover,
  openCategories,
}: {
  handleHover: (products: string) => void;
  openCategories: { [key: string]: boolean }; // Changed from string to object type
}) => {
  const language = {
    name: "language",
  };
  return (
    <>
      <Button
        variant="ghost"
        aria-label="Language"
        className="relative gap-4"
        onMouseEnter={() => handleHover(language.name)}
        onMouseLeave={() => handleHover(language.name)}
      >
        <Globe className="h-6 w-6" />
        {openCategories[language.name] && (
          <motion.div
            className="absolute pt-10 top-6"
            initial={{ opacity: 0, translateY: -5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative bg-white drop-shadow-md  py-4 flex flex-col items-center  rounded-lg">
              <div className="absolute bg-white -top-2 h-4 w-4 rotate-45"></div>
              <div className="text-start font-normal flex flex-col">
                <Link href="" className="py-2 pl-4 pr-14 hover:bg-zinc-100">
                  English
                </Link>
                <Link href="" className="py-2 pl-4 pr-14 hover:bg-zinc-100">
                  Portuguese
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </Button>
    </>
  );
};

export default Language;
