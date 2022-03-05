/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon1 from "assets/images/icons/service1.png";
import icon2 from "assets/images/icons/service2.png";
import icon3 from "assets/images/icons/service3.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Sitio Web",
    description: `Adquiere una página de inicio llamativa para captar la atención y aumentar las visitas de más usuarios.`,
  },
  {
    id: 3,
    icon: icon2,
    title: "Aplicación Web",
    description: `Cree un lugar de trabajo innovador e interactivo con el cual aumentar la productividad de su negocio.`,
  },
  {
    id: 4,
    icon: icon3,
    title: "Aplicación Móvil",
    description: `Lleva tu negocio en la palma de tu mano y está presente en todos los procesos desde cualquier lugar.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Descubre Tu Identidad con Nuestros Servicios"
          description="Creemos Juntos la Herramienta Ideal que Necesitas."
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

export default Services;

const styles = {
  section: {
    backgroundColor: rgba("#D6EAF8", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
