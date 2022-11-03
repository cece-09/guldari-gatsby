import * as React from "react"
import "../static/styles/styles.css"
import Layout  from "../components/layout"
import Navbar  from "../components/navbar"
import Section from "../components/section"

const menuitems = [
  { item: "굴다리시장", src: "/" },
  { item: "공지사항", src: "/404" },
];
export default function storeTemplate({ pageContext }) {
  const { name, phone, number } = pageContext.store;
  console.log(pageContext);
  return (
    <Layout navbar={<Navbar logo="리마켓프로젝트" itemList={menuitems} />}>
      <Section>
        <div className="post-header">
          <div>{`제 ${number}호`}</div>
          <div>{name}</div>
          <div>{phone}</div>
        </div>
      </Section>
    </Layout>
  );
}
