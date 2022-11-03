import * as React from "react"
import "../static/styles/styles.css"
import { graphql } from "gatsby"

import Layout   from "../components/layout"
import Navbar   from "../components/navbar"
import Tab      from "../components/tab"
import Carousel from "../components/carousel"
import Section  from "../components/section"


const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];
const IndexPage = ({ data }) => {
  // const storeData = data.allContentfulStore.edges;
  // const categoryData = data.allContentfulCategory.edges;
  const assetData = data.allContentfulAsset.edges;

  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <Carousel images={assetData}/>
      </Section>
      <Section>
        {/* <Tab stores={storeData} categories={categoryData} /> */}
      </Section>
      <Section>
        <div>this is the third section</div>
      </Section>
      {/* <Footer></Footer> */}
    </Layout>
  );
};

export const Head = () => <title>리마켓프로젝트</title>
export const query = graphql`
  query MyQuery {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          contentful_id
          title
          url
        }
      }
    }
  }
`
export default IndexPage
