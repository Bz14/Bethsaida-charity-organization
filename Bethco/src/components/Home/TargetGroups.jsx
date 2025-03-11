import { Title, Text, Container, SimpleGrid } from "@mantine/core";

const targetGroups = [
  "Destitute Women",
  "Orphan and Vulnerable Children",
  "Youths",
  "Elderly",
  "People with Disabilities (PwD)",
  "People Living with HIV (PLHIV)",
];

function TargetGroups() {
  return (
    <section className="py-16 bg-gray-50">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Our Beneficiaries
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {targetGroups.map((group, index) => (
            <Text key={index} className="text-bethco-gray text-center">
              {group}
            </Text>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default TargetGroups;
