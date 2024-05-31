/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { rgba } from "polished";
import { LearnMore } from "components/link";
import tabImage1 from "assets/images/tab-illustration-1.png";
import tabImage2 from "assets/images/tab-illustration-2.jpg";
import tabImage3 from "assets/images/tab-illustration-3.png";

const data = [
  {
    id: 1,
    tabTitle: "¿Por qué elegir nuestros servicio?",
    title: `LOS CLIENTES SON NUESTRO SERVIR`,
    description:
      "Nuestra calidad profesional, humana y experiencia nos destaca, dándonos la facilidad de entender sus necesidades rápidamente para afrontar los desafíos y a su vez ofrecer una solución adecuada a cada situación específica;",
    description2:
      "brindamos una atención personalizada con diligencia y amabilidad tomando cada proyecto con la relevancia requerida para comprender y ayudar a alcanzar las metas propuestas.",
    description3:
      "Cada proyecto es único, por lo cual te guiaremos a encontrar tu identidad como marca y destacar con ideas creativas frente al entorno en el que te encuentres.",
    image: tabImage1,
  },
  {
    id: 2,
    tabTitle: "¿Cuál es nuestra promesa comercial?",
    title: `FUERTES FRENTE A LAS ADVERSIDADES`,
    description: `Utilizando herramientas de vanguardia nuestra principal característica será el rendimiento, 
                  con lo cual podremos entregar productos de alta calidad y que cumplan con todas las exigencias que pueda demandar su negocio.`,
    image: tabImage2,
  },
  {
    id: 3,
    tabTitle: "¿Cuál es nuestro modelo a seguir?",
    title: `UN EQUIPO POR EXCELENCIA`,
    description: `Continuar incorporando personas con experiencia en diversos ámbitos para dar paso a nuevas ideas, 
                  brindando ambientes de trabajo sanos, con capacitaciones continúas contribuyendo a innovar y así llevar a nuestros clientes a vivir nuevas experiencias.`,
    image: tabImage3,
  },
];

const WhyUs = () => {
  return (
    <Box as="section" id="why-us" sx={styles.section}>
      <Container>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={<Heading as="h4">{item.tabTitle}</Heading>}
            >
              <Box>
                <Heading>{item.title}</Heading>
                <Text as="p" sx={styles.description}>
                  {item.description}
                  <br />
                  {item?.description2}
                  <br />
                  {item?.description3}
                </Text>
              </Box>
              <Box sx={styles.illustration}>
                <Image src={item.image} alt="illustration" />
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  tabs: {
    border: 0,
    ".rc-tabs-ink-bar": {
      backgroundColor: "primary",
    },
    ".rc-tabs-nav": {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    ".rc-tabs-nav-wrap": {
      borderBottom: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center",
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      pb: [3, null, null, 5, null, 6],
    },
    ".rc-tabs-tab-btn": {
      outline: 0,
      alignItems: "center",
      img: {
        outline: 0,
      },
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      h4: {
        fontFamily: "body",
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ["center", null, null, null, "left"],
        whiteSpace: ["break-spaces", null, null, null, "unset"],
      },
    },
    ".rc-tabs-tabpane": {
      display: ["flex", null, null, "grid"],
      flexDirection: ["column-reverse", null, null, "unset"],
      alignItems: "center",
      justifyContent: "center",
      gridTemplateColumns: [null, null, null, "0.9fr 1.1fr"],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: "heading",
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, "0.5px", null, "-1px"],
        textAlign: ["center", null, null, "left"],
      },
      p: {
        color: "textSecondary",
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ["center", null, null, "left"],
        mt: [4],
      },
      ".list-item": {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: "flex",
        alignItems: "center",
      },
    },
  },
  illustration: {
    display: ["flex"],
    alignItems: "center",
    justifyContent: "center",
    textAlign: [null, null, null, null, null, "center"],
    img: {
      maxWidth: ["65%", null, null, "100%", null, "90%", "100%"],
    },
  },
};
