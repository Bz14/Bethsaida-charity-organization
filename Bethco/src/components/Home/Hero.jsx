import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Paper, Title, Text, Button, useMantineTheme } from "@mantine/core";

const heroData = [
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Empowering Vulnerable Children",
    category: "Education",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074&auto=format&fit=crop",
    title: "Supporting Destitute Women",
    category: "Livelihood",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612285700950-7ab9c9cd25ba?q=80&w=2070&auto=format&fit=crop",
    title: "Health for All",
    category: "Reproductive Health",
  },
];

function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className="h-[440px] flex flex-col justify-between items-start bg-cover bg-center" // .card styles
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <Text
          size="xs"
          className="uppercase text-white opacity-70 font-bold" // .category styles
        >
          {category}
        </Text>
        <Title
          order={3}
          className="font-black text-white leading-tight text-[32px] mt-2 cursor-default" // .title styles
        >
          {title}
        </Title>
      </div>
      <Button
        variant="white"
        color="bethco-gray"
        className="hover:bg-bethco-gray/20"
      >
        Learn More
      </Button>
    </Paper>
  );
}

function Hero() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = heroData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <section className="py-10 bg-gray-50">
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: "xl", sm: 2 }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        withIndicators
        withControls
        className="max-w-full"
      >
        {slides}
      </Carousel>
    </section>
  );
}

export default Hero;
