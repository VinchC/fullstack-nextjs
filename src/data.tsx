import { BlogType, ConceptType } from "./types";
import chameleon from "../public/MainAfter.jpg";

export const blogs: BlogType[] = [
  {
    id: 1,
    title: "Un",
  },
  {
    id: 2,
    title: "Deux",
  },
];

export const concept: ConceptType[] = [
  {
    id: 1,
    title: "Uno",
  },
  {
    id: 2,
    title: "Due",
  },
];

export const features = [
  {
    title: "One",
    picture: chameleon.src,
    description: "The first",
  },
  {
    title: "Two",
    picture: chameleon.src,
    description: "The second",
  },
  {
    title: "Three",
    picture: chameleon.src,
    description: "The third",
  },
];
