import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../contents/Content";

const SocialLink = () => {
  return (
    <div>
      <div className="text-center h-full flex flex-col justify-center rounded mb-8">
        {socialLinks.map((socialLink) => (
          <div key={socialLink.id} className="m-4 md:m-8">
            {socialLink.iconImage !== "" ? (
              <div>
                <a href={socialLink.url}>
                  <Image
                    className=""
                    src={socialLink.iconImage}
                    width={170}
                    height={100}
                    objectFit="contain"
                    alt="background-image"
                  />
                </a>
              </div>
            ) : (
              <div className="p-4 md:p-8">
                <SocialIcon url={socialLink.url} />
              </div>
            )}

            <div className="md:text-lg">
              <p>{socialLink.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLink;
