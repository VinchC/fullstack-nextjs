import React from "react";
import Image from "next/image";

interface FeatureCardInterface {
  title: string;
  picture: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardInterface> = ({
  title,
  picture,
  description,
  className,
}) => {
  return (
    <>
      <div className={`flex flex-col ${className || ""}`}>
        <h4>{title}</h4>
        <Image src={picture} alt={title} width="768" height="512" />
        <p>{description}</p>
      </div>
    </>
  );
};
