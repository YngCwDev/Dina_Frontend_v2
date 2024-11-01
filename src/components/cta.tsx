import React from "react";
import {CtaButton} from "./cta_button";

const CallToAction = () => {
  return (
    <div className=" bg-zinc-900 text-white py-4">
      <div className="container flex items-center gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Let Us Help You</h2>
          <p>
            Let us help you achieve your project goals. For inquiries or to
            request a quote, reach out to us.
          </p>
        </div>
        <CtaButton classname="" />
      </div>
    </div>
  );
};

export default CallToAction;
