import { Title, Container, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="bg-[#4B5563] text-white p-4 sticky top-0 shadow-md">
      <Container size="lg" className="flex justify-between items-center">
        <Title order={2} className="text-xl md:text-2xl">
          <Link to="/">BethCO</Link>
        </Title>

        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          className="md:hidden"
          color="white"
          size="sm"
        />
        <nav
          className={`${
            opened ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-[#4B5563] md:bg-transparent justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base p-4 md:p-0 transition-all duration-300`}
        >
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setOpened(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setOpened(false)}
          >
            About
          </Link>
          <Link
            to="/programs"
            className="hover:underline"
            onClick={() => setOpened(false)}
          >
            Programs
          </Link>
          <Link
            to="/projects"
            className="hover:underline"
            onClick={() => setOpened(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setOpened(false)}
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
