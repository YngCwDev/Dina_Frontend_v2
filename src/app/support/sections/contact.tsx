import {buttonVariants } from "@/components/ui/button";
import { contacts } from "@/lib/contacts";
import Link from "next/link";
import React from "react";
import { MdWhatsapp } from "react-icons/md";
import Form from "./form";

const Contact = () => {
  return (
    <div className="bg-zinc-100 py-16 px-[20vw] ">
      <div className=" bg-white drop-shadow-md  flex">
        <div className="p-16 bg-red-700 text-white w-fit">
          <div className="space-y-4">
            <div className="h-2 w-[3vw] bg-white"></div>
            <h2 className="text-3xl font-semibold">CONTACT US</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-8 py-8 ">
              {contacts.map((info) => (
                <div key={info.city} className="space-y-2">
                  <h3 className="text-2xl font-medium">{info.city}</h3>
                  <p>
                    <span className="font-medium">Tel:</span>&nbsp;{info.Tel}
                  </p>
                  <p className="">
                    <span className="font-medium">Address:</span>&nbsp;
                    {info.Address}
                  </p>
                </div>
              ))}
              <div>
                <Link
                   href='/' className={buttonVariants({variant:'red'})}
                >
                  <MdWhatsapp size={20} />
                  <Link href="">Via Whatsapp</Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}

        <div className="p-16 space-y-4" >
          <h2 className="text-2xl font-semibold py-6 text-red-700">SEND US AN INQUERY</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
