import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Tab from "../components/tab";
import { Section } from "../components/components";
import { graphql } from "gatsby";
import { createPages } from "../../gatsby-node";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];

const IndexPage = ({ data }) => {
  const storeData = data.allContentfulStore.nodes;
  const categoryData = data.allContentfulCategory.nodes;
  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <div>this is the first section</div>
      </Section>
      <Section>
        <div>this is the second section</div>
        <Tab stores={storeData} categories={categoryData} />
      </Section>
      <Section>
        <div>this is the third section</div>
      </Section>
      {/* <Footer></Footer> */}
    </Layout>
  );
};

export const Head = () => <title>리마켓</title>;
export const query = graphql`
  query MyQuery {
    allContentfulStore(sort: { fields: number }) {
      nodes {
        contentful_id
        name
        number
        phone
        image {
          url
        }
        category {
          contentful_id
          key
          code
          name
        }
        description {
          raw
        }
      }
      totalCount
    }
    allContentfulCategory(sort: { fields: key }) {
      nodes {
        contentful_id
        key
        code
        name
      }
    }
  }
`;

export default IndexPage;
