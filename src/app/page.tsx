import Link from "next/link";
import Header from "@/components/Header";
import { generateMetadata } from "@/utils/common";

export const metadata = generateMetadata();

const Home = () => {
  return (
    <>
      <Header />
      <main className="centered-container">
        <section className="card">
          <h2 className="h2">技術書典14</h2>
          <p>
            技術書典14にて「Digicre Tech Book
            2023」に「RustとLLVMで始める！コンパイラフロントエンド制作入門」を寄稿
          </p>
          <p>
            <Link href="/techbookfest14">詳細ページ</Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
