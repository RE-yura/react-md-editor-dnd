import dynamic from "next/dynamic";

const MdEditor = dynamic(import("../components/MdEditor"), {
  ssr: false,
  loading: () => <div>now loading</div>
});

const IndexPage = () => <MdEditor />;

export default IndexPage;
