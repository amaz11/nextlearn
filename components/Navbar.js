import Link from "next/link";
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image  src="/logo.jpg" width={128} height={77} alt="logo"/>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/comp/Hello">
          <a>Hello</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
