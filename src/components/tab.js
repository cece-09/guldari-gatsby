import * as React from "react";
import { Link } from "gatsby";
import {
  storeContainer,
  storeCategory,
  storeList,
  storeThumbnail,
  storeThumbnailImages,
  storeThumbnailText,
  selectedBtn,
} from "./styles/tab.module.css";
// import { renderRichText } from "gatsby-source-contentful/rich-text";

// 카테고리 버튼 목록
const StoreCategory = ({ list, onClick, selected }) => {
  return (
    <div className={storeCategory}>
      {list.map(({ node }, i) => {
        return (
          <button
            key={i}
            name={node.contentful_id}
            onClick={onClick}
            className={node.contentful_id === selected ? selectedBtn : ""}
          >
            {node.name}
          </button>
        );
      })}
    </div>
  );
};
const StoreThumbnailImages = ({ elem }) => {
  return elem !== null ? (
    <div className={storeThumbnailImages}>
      <ul>
        {elem.map((url, i) => {
          return (
            <li key={i}>
              <img src={url} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
// 썸네일 목록
const StoreThumbnail = ({ elem }) => {
  const imageSrc = elem.image !== null ? elem.image.map((el) => el.url) : null;
  return (
    <>
      <Link
        to={`/store/${elem.contentful_id}`}
        className={storeThumbnail}
        key={elem.contentful_id}
      >
        <StoreThumbnailImages elem={imageSrc} />
        <div className={storeThumbnailText}>
          <h1>{elem.name}</h1>
          <h2>굴다리시장 {elem.number}호</h2>
          <h3>{elem.phone}</h3>
        </div>
        {/*renderRichText(elem.description)*/}
      </Link>
    </>
  );
};

// 전체 리스트 섹션
const StoreList = ({ list, selected }) => {
  console.log(list);
  const filetered = list.filter(
    (elem) => elem.node.category.contentful_id === selected
  );
  console.log(filetered);
  
  return (
    <section className={storeList}>
      {filetered.map((store, i) => {
        
        return <StoreThumbnail key={i} elem={store.node} />;
      })}
    </section>
  );
};

// 전체 탭 to export
const Tab = ({ stores, categories }) => {
  const tabInit = categories[0].node.contentful_id;
  const [tab, setTab] = React.useState(tabInit);
  const onTabClick = (e) => {
    setTab(e.target.name);
  };

  return (
    <section className={storeContainer}>
      <StoreCategory list={categories} selected={tab} onClick={onTabClick} />
      <StoreList list={stores} selected={tab} />
    </section>
  );
};

export default Tab;
