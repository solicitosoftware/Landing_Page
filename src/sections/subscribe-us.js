/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Flex, Label } from "theme-ui";
import SectionHeading from "components/section-heading";
import Input from "components/input";
import { toast, ToastContainer } from "react-nextjs-toast";

const SubscribeUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const email = e.target[1].value;
    if (email && nombre) {
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify({ email, nombre }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == "OK") {
            onClickNotify();
          }
        })
        .catch((error) => {
          console.error(error);
        });
      e.target.reset();
    }
  };

  const onClickNotify = () => {
    toast.notify("Sus datos fueron enviados correctamente", {
      duration: 5,
      type: "success",
    });
  };

  return (
    <Box
      as="section"
      id="email"
      sx={styles.section}
      variant="section.subscribe"
    >
      <Container>
        <ToastContainer />
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="¿Te gusta nuestro servicio?"
            description="Déjanos tu información y nos pondremos en contacto para iniciar tu proyecto. ¡Vamos a crear algo increíble juntos!"
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="nombre" variant="styles.srOnly">
                Nombre
              </Label>
              <Input
                id="nombre"
                type="nombre"
                className="input"
                placeholder="Ingrese su nombre"
              />
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="input"
                placeholder="Ingrese su email"
              />
              <Button variant="primary">Enviar</Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: ["none", null, null, `#D6EAF8`],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: "#fff",
    borderRadius: 15,
    p: [null, null, null, "40px 110px 50px", "50px 50px", "40px"],
    gap: "50px",
    display: ["block", null, "grid", "block", "grid"],
    alignItems: "center",
    gridTemplateColumns: ["repeat(2, 1fr)"],
  },
  heading: {
    textAlign: ["center", null, "left", "center", "left"],
    mb: ["30px", null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ["auto", null, null, null, 0],
      mr: ["auto", null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    ".input": {
      minHeight: ["50px", "50px", "60px"],
    },
    button: {
      minHeight: ["50px", "50px", "60px"],
      fontSize: ["14px", "14px", "16px"],
      mt: ["15px", null, null, 0],
    },
  },
  inputGroup: {
    display: "grid",
    gap: "1rem",
  },
};
