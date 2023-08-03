import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts Page</h1>
      <p>{router.query.slug !== undefined && router.query.slug[0]}</p>
    </div>
  );
}
export default BlogPostPage;
