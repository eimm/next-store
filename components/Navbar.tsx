import Link from "next/link";
import Container from "./ui/Container";
import Routes from "./Routes";
import { getCategories } from "@/actions/Categories";
import NavbatActions from "./NavbatActions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-extrabold text-2xl">STORE</p>
          </Link>
          <Routes data={categories} />
          <NavbatActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
