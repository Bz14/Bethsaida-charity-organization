import { Text, Container } from "@mantine/core";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <Container
        size="lg"
        className="flex flex-col md:flex-row justify-between items-center"
      >
        <Text size="sm">© 2025 Bethsaida Charity Organization</Text>
        <Text size="sm">
          Email: bethsaida.addis@gmail.com | Phone: +251 911 05 76 06
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
