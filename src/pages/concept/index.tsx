import { NextPage } from "next";
import ConceptCard from "../../component/ConceptCard";
import { concept } from "../../data";

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
