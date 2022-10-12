import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Tab from "../components/tab";
import { Carousel } from "../components/carousel";
import { Section } from "../components/components";
import { graphql } from "gatsby";
// import { createPages } from "../../gatsby-node";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];
const IndexPage = ({ data }) => {
  const storeData = data.allContentfulStore.edges;
  const categoryData = data.allContentfulCategory.edges;

  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <Carousel />
      </Section>
      <Section>
        <Tab stores={storeData} categories={categoryData} />
      </Section>
      <Section>
        <div>this is the third section</div>
      </Section>
      {/* <Footer></Footer> */}
    </Layout>
  );
};

export const Head = () => <title>리마켓프로젝트</title>;
export const query = graphql`
  query MyQuery {
    allContentfulStore {
      edges {
        node {
          id
          contentful_id
          name
          phone
          number
          description {
            raw
          }
          category {
            contentful_id
            key
            code
            name
          }
          image {
            url
            title
          }
        }
      }
    }
    allContentfulCategory(sort: {fields: key}) {
      edges {
        node {
          contentful_id
          key
          code
          name
        }
      }
    }
  }
`;

export default IndexPage;
