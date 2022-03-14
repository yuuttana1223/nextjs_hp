import type { NextPage } from "next";
import { Layout } from "src/layouts/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <p className="text-4xl">Welcome to Next.js</p>
      </Layout>
      <div className="bg-black">aaaa</div>
    </>
  );
};

export default Home;
