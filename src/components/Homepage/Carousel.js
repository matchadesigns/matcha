/** @jsx jsx */
import { jsx, Box, Flex, Grid } from "theme-ui";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { StaticImage } from "gatsby-plugin-image";

const slides = [
  {
    title: "Découvrez nos dernières affiches sur Paris",
    subtitle: "Louvre, Montmartre, Tour Eiffel, ...",
    image: (
      <StaticImage
        src="../../assets/images/IMAGE 2-HD.jpg"
        alt="Paris Affiche 1"
        layout="fullWidth"
        style={{ height: "100%" }}
        imgStyle={{ objectFit: "cover" }}
      />
    ),
  },
  {
    title: "Une collection unique pour votre intérieur",
    subtitle: "Design moderne et minimaliste",
    image: (
      <StaticImage
        src="../../assets/images/IMAGE 1.jpg"
        alt="Paris Affiche 2"
        layout="fullWidth"
        style={{ height: "100%" }}
        imgStyle={{ objectFit: "cover" }}
      />
    ),
  },
];

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.goTo(index),
    [emblaApi],
  );

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box ref={emblaRef}>
        <Flex sx={{ display: "flex" }}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 100%",
                minWidth: 0,
                minHeight: ["auto", "auto", "400px", "500px"],
              }}
            >
              <Grid columns={[1, 1, 2]} gap={0} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    bg: "green",
                    color: "brownWhite",
                    p: [4, 5, 5],
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box sx={{ maxWidth: "500px", mx: "auto", width: "100%" }}>
                    <h1
                      sx={{
                        fontFamily: "heading",
                        fontWeight: "heading",
                        color: "brownWhite",
                        fontSize: [4, 5, 5, 6],
                        lineHeight: "1.1",
                        mb: 4,
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      sx={{
                        fontFamily: "body",
                        fontSize: [2, 3, 3, 4],
                        lineHeight: "1.4",
                        opacity: 0.9,
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </Box>
                  <Flex
                    sx={{
                      position: "absolute",
                      bottom: [3, 4],
                      left: [4, 5, 6],
                      gap: 3,
                      zIndex: 1,
                    }}
                  >
                    {slides.map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          bg: "brownWhite",
                          opacity: i === selectedIndex ? 1 : 0.3,
                          cursor: "pointer",
                          transition: "all 0.2s ease-in-out",
                          border: "2px solid",
                          borderColor: "brownWhite",
                          ":hover": {
                            opacity: 0.8,
                          },
                        }}
                        onClick={() => scrollTo(i)}
                      />
                    ))}
                  </Flex>
                </Box>
                <Box sx={{ height: ["300px", "400px", "100%"] }}>
                  {slide.image}
                </Box>
              </Grid>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
