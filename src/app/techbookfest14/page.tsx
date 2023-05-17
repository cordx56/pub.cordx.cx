import Header from "@/components/Header";
import { breadcrumbs, pageMetadata } from "./metadata";

export const metadata = pageMetadata;

const TechBookFest14 = () => {
  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <main className="centered-container">
        <section className="card">
          <h3 className="h2">技術書典14</h3>
          <p>
            技術書典14にて「Digicre Tech Book
            2023」に「RustとLLVMで始める！コンパイラフロントエンド制作入門」を寄稿。
          </p>
          <h4 className="h3" id="repo">
            Repository
          </h4>
          <h4 className="h3">参考文献</h4>
          <ul className="ul">
            <li>
              <a href="https://smlfamily.github.io/">
                Robin Milner, Mads Tofte, Robert Harper, and David MacQueen.
                (1997). The Definition of Standard ML, Revised
              </a>
            </li>
            <li>
              五十嵐淳（2011）『プログラミング言語の基礎概念』 サイエンス社
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default TechBookFest14;
