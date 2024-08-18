import Link from 'next/link';

import { getCategories } from '@/actions/Categories';

import Container from './ui/Container';
import NavbarActions from './NavbarActions';
import Routes from './Routes';

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b" id="header">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-extrabold text-2xl">STORE</p>
          </Link>
          <Routes data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
