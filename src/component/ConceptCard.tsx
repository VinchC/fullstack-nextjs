export default function ConceptCard({ id, title }: { id: number; title: string }) {
  return (
    <>
      <p>{id}</p>
      <p>{title}</p>
    </>
  );
}
