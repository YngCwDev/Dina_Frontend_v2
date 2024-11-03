import { CircleUser } from "lucide-react";
import React from "react";

const QuoteMassage = () => {
  return (
    <div className="bg-zinc-100 flex justify-center py-28">
      <div className="md:px-[30vw] flex flex-col gap-4">
        <div className="flex items-center gap-2">
        <CircleUser size={30}/>
        <h2 className="font-semibold text-2xl">General manager</h2>
        </div>
        <p className="text-2xl">
        &quot;Stay focused on safety and efficiency. With the right tools and
          determination, every challenge becomes an opportunity for success.&quot;
        </p>
      </div>
    </div>
  );
};

export default QuoteMassage;
