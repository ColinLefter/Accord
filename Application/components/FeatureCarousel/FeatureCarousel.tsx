import { Carousel } from '@mantine/carousel';
import { Image } from "@mantine/core";

export function FeatureCarousel() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={5}
      orientation="horizontal"
    >
      <Carousel.Slide>
        <Image src="/Feature1.png" alt="Image 1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/Feature2.png" alt="Image 1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/Feature3.png" alt="Image 1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/Feature4.png" alt="Image 1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/Feature5.png" alt="Image 1" />
      </Carousel.Slide>
    </Carousel>
  );
}