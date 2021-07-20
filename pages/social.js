import Layout from "../components/Layout";
import SocialLink from "../components/social/SocialLink";
const Social = () => {
  return (
    <Layout title="Social">
      <div className="my-8 text-4xl">
        <p> Social Links</p>
      </div>
      <SocialLink />
    </Layout>
  );
};

export default Social;
