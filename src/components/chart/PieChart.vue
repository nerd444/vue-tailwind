<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      datacollection: {
        labels: ["10~20", "30~40", "50대 이상"],
        datasets: [
          {
            backgroundColor: ["#103fe8", "#e86a10", "#a400e6"],
            data: [65, 15, 30]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "연령대",
          fontSize: 18,
          fontColor: "black"
        },
        legend: {
          display: true,
          position: "bottom"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
