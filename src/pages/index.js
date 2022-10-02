import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Section, Flex, Text } from "../components/basic";
import { graphql } from "gatsby";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <Text title="this is title" body="this is body" />
      </Section>
    </Layout>
  );
};

export const Head = () => <title>리마켓</title>;
export const query = graphql`
  query MyQuery {
    allContentfulStore(sort: { fields: number }) {
      nodes {
        name
        number
        phone
        description {
          raw
        }
        contentful_id
      }
      totalCount
    }
  }
`;

export default IndexPage;
