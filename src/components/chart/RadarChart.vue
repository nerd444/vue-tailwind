<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  data() {
    return {
      datacollection: {
        labels: ["체중", "체지방", "골격근량", "근량", "BMI", "체수분"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(71,129,236, 0.2)",
            borderColor: "#4781EC",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#4781EC",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [72, 34, 88, 75, 50, 16]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        defaultFontColor: "#4781EC"
      }
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
