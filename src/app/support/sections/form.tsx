import React from "react";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <form action="" className="flex flex-col gap-2">
        <div className="space-y-8">
          <div className="flex gap-8">
            <div>
              <label htmlFor="Name">Full Name</label>
              <Input
                type="text"
                name="Name"
                className="w-[15vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
              />
            </div>
            <div>
              <label htmlFor="Name">Email</label>
              <Input
                type="text"
                name="Name"
                className="w-[15vw] h-7 px-2 border-t-0 border-x-0 border-red-700 rounded-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <Input
              type="text"
              name="subject"
              className="w-full px-2 h-7 border-t-0 border-x-0 border-red-700 rounded-none"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Textarea
              name="message"
              rows={5}
              id=""
              placeholder="Type your message here."
              className="w-full px-2 border-[1px]  border-red-700 rounded-none"
            ></Textarea>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-zinc-200 rounded-xl w-fit">
            <Input
              type="submit"
              value="Send Message"
              className="w-fit h-fit rounded-xl bg-red-700 hover:[bg-white, text-zinc-950]  text-white font-medium py-2 border-1 cursor-pointer"
            />
            <Link href="" className="py-2 flex items-center h-fit w-fit">
              Request a Quote{" "}
              <ChevronRight
                size={20}
                strokeWidth={1}
                className="relative top-[1px]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Input type="checkbox" name="terms" id="" className="w-4" />
            <label htmlFor="terms"> I agree with terms and conditions</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
