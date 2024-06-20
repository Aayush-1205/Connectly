import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarComponent = ({ imgSrc, name }) => {
  return (
    <Avatar>
      <AvatarImage src={imgSrc} alt={name} />
      <AvatarFallback>{name?.split("")[0]}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
