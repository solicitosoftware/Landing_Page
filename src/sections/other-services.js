/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon4 from "assets/images/icons/service4.png";
import icon5 from "assets/images/icons/service5.png";
import icon6 from "assets/images/icons/service6.png";

const data = [
  {
    id: 1,
    icon: icon4,
    title: "Diseños Únicos",
    description: `Somos creativos y soñadores por eso pensamos que una marca siempre debe dejar huella.`,
  },
  {
    id: 2,
    icon: icon5,
    title: "Servicio Personalizado",
    description: `Nos apasiona trabajar de la mano con nuestros clientes para hacer sus labores más sencillas.`,
  },
  {
    id: 3,
    icon: icon6,
    title: "Soporte en Línea",
    description: `Estamos alertas en todo momento para que sus procesos sean seguros y confiables.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" id="valores" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Valores Agregados"
          description=""
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: rgba("#D6EAF8", 0.5),
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
