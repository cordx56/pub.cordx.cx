"use client";
import { useEffect } from "react";

const TechBookFest14Repo = () => {
  useEffect(() => {
    if (location.hash === "#ebnf") {
      location.replace("https://github.com/cordx56");
    }
  });
  return null;
};

export default TechBookFest14Repo;
