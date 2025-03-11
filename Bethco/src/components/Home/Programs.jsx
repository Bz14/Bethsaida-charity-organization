import { Title, Text, Container, SimpleGrid } from "@mantine/core";

const thematicAreas = [
  "Education",
  "Health (Reproductive Health)",
  "Food Security, Nutrition and Livelihood",
  "Income Generation and Employment",
  "Gender Based Violence",
  "Women & Girls Empowerment",
  "Capacity Building",
  "Family Reintegration",
  "Environmental Protection (WASH)",
  "Peace Building",
];

function Programs() {
  return (
    <section className="py-16 bg-white">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Our Programs
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {thematicAreas.map((area, index) => (
            <div key={index} className="p-4 bg-bethco-teal/10 rounded-md">
              <Text className="text-bethco-gray font-semibold">{area}</Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default Programs;
