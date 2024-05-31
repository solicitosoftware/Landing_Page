/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image } from "theme-ui";

const TeamMember = ({ member }) => {
  return (
    <Flex as="figure" sx={styles.avatar}>
      <Image src={member?.logo} alt={member?.name} />
    </Flex>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
  },
};
