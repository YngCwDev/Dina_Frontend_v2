import { Input } from "@/components/ui/input";
import React from "react";

const Form = () => {
  return (
    <div className="bg-white py-28 px-20">
      <form action="POST" className="space-y-32">
        {/* First flex */}
        <div className="flex  justify-center gap-16">
          <div>
            <label htmlFor="Name">Full Name</label>
            <Input
              type="text"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
          <div>
            <label htmlFor="Name">Email</label>
            <Input
              type="email"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
        </div>
        {/* First flex */}
        <div className="flex  justify-center gap-16">
          <div>
            <label htmlFor="Name">Full Name</label>
            <Input
              type="text"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
          <div>
            <label htmlFor="Name">Email</label>
            <Input
              type="email"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
        </div>
        {/* First flex */}
        <div className="flex  justify-center gap-16">
          <div>
            <label htmlFor="Name">Full Name</label>
            <Input
              type="text"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
          <div>
            <label htmlFor="Name">Email</label>
            <Input
              type="email"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
        </div>
        {/* First flex */}
        <div className="flex  justify-center gap-16">
          <div>
            <label htmlFor="Name">Full Name</label>
            <Input
              type="text"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
          <div>
            <label htmlFor="Name">Email</label>
            <Input
              type="email"
              name="Name"
              className="w-[20vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
