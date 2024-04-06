import { Carousel } from '@mantine/carousel';
import { Image } from "@mantine/core";

/**
 * Displays a carousel component showcasing features of the application through images. 
 * The carousel is designed to loop infinitely with smooth transitions and includes indicators for 
 * navigating between slides. Each slide presents an image representing a key feature of the application, 
 * making it an engaging way to highlight these aspects to users.
 *
 * The configuration allows for a portion of the next and previous slides to be visible, encouraging 
 * interaction. The carousel supports both automatic and manual navigation, enhancing the user experience 
 * by providing visual cues about the application's capabilities.
 *
 * @returns {JSX.Element} A carousel of images, each representing a different feature of the application.
 */
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