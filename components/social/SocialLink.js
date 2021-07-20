import React from "react";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../contents/Content";

const SocialLink = () => {
  return (
    <div>
      <div className="text-center h-full flex flex-col justify-center rounded">
        {socialLinks.map((socialLink) => (
          <div key={socialLink.id} className="m-8">
            <div className="p-8">
              <SocialIcon url={socialLink.url} />
            </div>
            <div className="text-lg">
              <p>{socialLink.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLink;
