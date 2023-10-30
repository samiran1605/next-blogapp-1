import Image from "next/image";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";

export default function Home({ searchParams }: { searchParams: any }) {
  const Page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />

      {/*@ts-expect-error Async Server Component*/}
      <CategoryList />
      <div className={styles.content}>
        {/*@ts-expect-error Async Server Component*/}
        <CardList page={Page} />
        <Menu />
      </div>
    </div>
  );
}
