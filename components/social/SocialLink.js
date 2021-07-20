import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialLink = () => {
  return (
    <div>
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="p-8">
          <SocialIcon url="https://www.youtube.com/channel/UCXUGCY4Vnmjk5CoUcqUmCjA/featured" />
        </div>
        <div className="text-xl">
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
