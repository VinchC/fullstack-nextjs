// export default function ConceptCard({ id, title }: { id: number; title: string }) {
//   return (
//     <>
//       <p>{id}</p>
//       <p>{title}</p>
//     </>
//   );
// }

import { ConceptType } from "@/types";

export const ConceptCard: React.FC<ConceptType> = ({ id, title }) => {
  return (
    <>
      <p>{id}</p>
      <p>{title}</p>
    </>
  );
};
