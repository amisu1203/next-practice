import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  console.log(router.query.id);
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
