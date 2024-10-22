import { NextPage } from "next";
import { concept } from "../../data";
import { ConceptCard } from "@/component/ConceptCard";
// import ConceptCard from "@/component/ConceptCard";
const ConceptIndex: NextPage = () => {
  return (
    <>
      {concept.map((blog, index) => (
        <ConceptCard key={index} id={blog.id} title={blog.title} />
      ))}
    </>
  );
};

export default ConceptIndex;
