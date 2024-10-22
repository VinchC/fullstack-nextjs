export default function BlogCard({ id, title }: { id: number; title: string }) {
  return (
    <>
      <p>{id}</p>
      <p>{title}</p>
    </>
  );
}
