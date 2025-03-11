import { Title, Text, Container, SimpleGrid } from "@mantine/core";

const projects = [
  { title: "Community Based OVC Support", year: "2013", funder: "RCCSGA" },
  {
    title: "Sustainable Life Support for Street Children",
    year: "2014-2015",
    funder: "British Council",
  },
  {
    title: "GBV Prevention in Hawassa",
    year: "2021-2023",
    funder: "French Embassy",
  },
];

function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Our Projects
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-md">
              <Text className="text-bethco-gray font-semibold">
                {project.title}
              </Text>
              <Text size="sm" className="text-bethco-gray/70">
                {project.year} - Funded by {project.funder}
              </Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default Projects;
