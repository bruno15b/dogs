import React from "react";
import { STATS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, loading, request } = useFetch();
  const token = window.localStorage.getItem("token");
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET(token);
      request(url, options);
    }
    getData();
  }, [request, token]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
}

export default UserStats;
