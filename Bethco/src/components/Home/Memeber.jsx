import { Title, Text, Container } from "@mantine/core";

function FoundingMembers() {
  return (
    <section className="py-16 bg-white">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-3xl text-bethco-gray mb-6">
          Founding Member
        </Title>
        <Text className="text-bethco-gray font-semibold">
          Mrs. Alemstehay Bekele
        </Text>
        <Text size="sm" className="text-bethco-gray/80 max-w-2xl mx-auto">
          Founder and Executive Director of Bethsaida Charity Organization,
          leading the mission since 2007.
        </Text>
      </Container>
    </section>
  );
}

export default FoundingMembers;
