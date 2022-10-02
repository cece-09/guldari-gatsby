import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Section, Flex, Text } from "../components/basic";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useStore } from "../hooks/use-store";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];

const IndexPage = () => {
  // const { title, description, siteUrl } = useSiteMetadata();
  // console.log(useStore);
  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <Text title="this is title" body="this is body" />
      </Section>
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <title>리마켓</title>;
