import Link from "next/link";

const { useRouter } = require("next/router");

function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  const router = useRouter();
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {/* 동적 라우팅 방법 1 */}
        {/* {clients.map((client) => (
            <li key={client.id}>
              <Link href={`clients/${client.id}`}>{client.name}</Link>
            </li>)} */}

        {/* 동적 라우팅 방법 2 */}
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ClientPage;
