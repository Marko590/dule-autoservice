import React, { ReactNode } from "react";

const ContactInfo = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <div>
      <span className="flex base-text gap-4 font-sans items-center text-xl md:text-3xl font-light">
        <div className="w-6 h-6  md:w-8 md:h-8">{icon} </div>
        {text}
      </span>
    </div>
  );
};

export default ContactInfo;
