import React from "react";
import styles from "./UserStatsGraph.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

function UserStatsGraphs({ data }) {
  const [grap, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setGraph(
      data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      })
    );

    setTotal(
      data.reduce((acumulador, { acessos }) => {
        return (acumulador += Number(acessos));
      }, 0)
    );
  }, [data]);

  return (
    <section className={`${styles.graph} animaLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={grap}
          innerRadius={50}
          padding={{ left: 80, top: 20, bottom: 20, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: {
              fontSize: 10,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar data={grap}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
