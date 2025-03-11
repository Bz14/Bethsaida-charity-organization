import { Title, Text, Container } from "@mantine/core";

function Blogs() {
  return (
    <section className="py-16 bg-white">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-3xl text-bethco-gray mb-6">
          Blogs
        </Title>
        <Text className="text-bethco-gray/80">
          Coming soon—stay tuned for updates and stories from BethCO!
        </Text>
      </Container>
    </section>
  );
}

export default Blogs;
