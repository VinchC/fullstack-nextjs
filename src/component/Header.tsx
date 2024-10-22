import Link from "next/link";

const Header:React.FC = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start px-3"><Link href="/">LOGO</Link></div>
 
      <div className="navbar-end">
        <div className="px-3"><Link href="/blog">Blog</Link></div>
        <div className="px-3"><Link href="/concept">Concept</Link></div>
        <div className="px-3"><Link href="/connexion">Connexion</Link></div>
      </div>
    </header>
  );
};

export default Header;
