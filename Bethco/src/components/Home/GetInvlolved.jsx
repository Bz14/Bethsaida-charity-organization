import { Title, Text, Container, Button, SimpleGrid } from "@mantine/core";
import { Link } from "react-router-dom";

function GetInvolved() {
  return (
    <section className="py-16 bg-bethco-teal/10">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-3xl text-bethco-gray mb-6">
          Get Involved
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <div>
            <Text className="text-bethco-gray mb-2">Become a Member</Text>
            <Button
              component={Link}
              to="/get-involved"
              variant="outline"
              color="bethco-teal"
            >
              Join Us
            </Button>
          </div>
          <div>
            <Text className="text-bethco-gray mb-2">Donate</Text>
            <Button component={Link} to="/get-involved" color="bethco-teal">
              Donate Now
            </Button>
          </div>
          <div>
            <Text className="text-bethco-gray mb-2">Volunteer</Text>
            <Button
              component={Link}
              to="/get-involved"
              variant="outline"
              color="bethco-teal"
            >
              Learn More
            </Button>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default GetInvolved;
