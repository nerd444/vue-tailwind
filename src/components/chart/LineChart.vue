<script>
//Importing Line class from the vue-chartjs wrapper
import { Line } from "vue-chartjs";
//Exporting this so it can be used in other components
export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        datasets: [
          {
            label: "Today",
            backgroundColor: "rgb(71,129,236, 0.2)",
            pointBackgroundColor: "white",
            borderWidth: 1.5,
            borderColor: "#4781EC",
            pointBorderColor: "#4781EC",
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              },
              position: "right"
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "top",
          align: "end"
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
