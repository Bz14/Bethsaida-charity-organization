import { Title, Text, Container, SimpleGrid } from "@mantine/core";

const partners = [
  "CCRDA, Ethiopia",
  "World Vision Ethiopia",
  "U.S. Embassy PEPFAR",
  "French Embassy",
  "Austrian Development Agency",
];

function Partners() {
  return (
    <section className="py-16 bg-white">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Our Partners
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {partners.map((partner, index) => (
            <Text key={index} className="text-bethco-gray text-center">
              {partner}
            </Text>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default Partners;
