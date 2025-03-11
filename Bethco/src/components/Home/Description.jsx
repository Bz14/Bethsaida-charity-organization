import { Title, Text, Container } from "@mantine/core";

function Description() {
  return (
    <section className="py-16 bg-gray-50">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-3xl text-bethco-gray mb-6">
          Who We Are
        </Title>
        <Text size="md" className="text-bethco-gray/80 max-w-4xl mx-auto">
          Since 2007, Bethsaida Charity Organization (BethCO) has been
          empowering vulnerable communities across Ethiopia—Southern Nations,
          Sidama, Oromia, Amhara, and Addis Ababa—through impactful social and
          capacity-building programs.
        </Text>
      </Container>
    </section>
  );
}

export default Description;
