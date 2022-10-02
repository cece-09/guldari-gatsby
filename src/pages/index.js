import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Card } from "../components/card";
import { Section } from "../components/components";
import { graphql } from "gatsby";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];

const IndexPage = ({ data }) => {
  const stores = data.allContentfulStore.nodes;
  console.log(stores[0].name);
  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        {stores.map((s, i) => {
          <Card i={i} title={s.name} description={s.description}></Card>;
        })}
        <Card></Card>
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
