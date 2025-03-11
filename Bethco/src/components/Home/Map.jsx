import { Title, Container } from "@mantine/core";

function Map() {
  return (
    <section className="py-16 bg-gray-50">
      <Container size="lg">
        <Title order={2} className="text-3xl text-bethco-gray mb-6 text-center">
          Our Location
        </Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.543145177615!2d38.7860749!3d8.991499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f88b16f34f%3A0xbec2b0d0c4f1f4e2!2sAkaki%20Kality%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md"
        ></iframe>
      </Container>
    </section>
  );
}

export default Map;
