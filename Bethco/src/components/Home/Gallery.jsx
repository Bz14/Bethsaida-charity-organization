import { Title, Container, SimpleGrid, Image } from "@mantine/core";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
    "https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074",
    "https://images.unsplash.com/photo-1612285700950-7ab9c9cd25ba?q=80&w=2070",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Gallery
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {images.map((src, index) => (
            <Image key={index} src={src} alt="Gallery image" radius="md" />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default Gallery;
