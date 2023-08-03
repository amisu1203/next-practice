import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...

    // push 사용 + 문자열 경로
    // router.push("/clients/max/projecta");

    // push 사용 + 객체 인자 전달
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });

    // replace 사용 + 문자열 경로 (마찬가지로 객체 인자 전달도 가능함)
    // router.replace("/clients/max/projecta");
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
