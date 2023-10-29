import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbBurg from "../public/images/thumbBurg.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="stellar" title="stellar" thumbnail={thumbBurg}>
          Учебный проект на курсе Яндекс.Практикума React-разработчик. Написан на TypeScript. Инициализирован с помощью CRA.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);
export default Works
export { getServerSideProps } from '../components/chakra'