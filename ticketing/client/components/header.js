import react from 'react';
import Link from 'next/link';

const Header = ({ currentUser }) => {
  console.log(currentUser);
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((item) => item)
    .map(({ label, href }) => {
      return (
        <li key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      );
    });

  console.log(links);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Posts</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>

      {/* {links.map((item) => {
        <Link href={item.url}>
          <a class="nav-link">{item.label}</a>
        </Link>;
      })} */}
    </nav>
  );
};

export default Header;
