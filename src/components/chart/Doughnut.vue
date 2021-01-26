<script>
//Importing Line class from the vue-chartjs wrapper
import { Doughnut } from "vue-chartjs";
//Exporting this so it can be used in other components
export default {
  extends: Doughnut,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["승인대기", "반려", "승인"],
        datasets: [
          {
            label: "Today",
            backgroundColor: ["#E8EAEF", "#FF9B70", "#4781EC"],
            //Data to be represented on y-axis
            data: [30, 10, 60],
            borderWidth: 1
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        legend: {
          display: true,
          position: "right"
        },
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        elements: {
          center: {
            text: "50%" //set as you wish
          }
        }
      }
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
