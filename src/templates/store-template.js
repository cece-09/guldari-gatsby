import * as React from "react";
import "../static/styles/styles.css";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Tab from "../components/tab";
import { Carousel } from "../components/carousel";
import { Section } from "../components/components";
import { graphql } from "gatsby";

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];
export default function storeTemplate({ pageContext }) {
  const { name, phone, number } = pageContext.store;
  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <div>{name}</div>
      </Section>
    </Layout>
  );
}
