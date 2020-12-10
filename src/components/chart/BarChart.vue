<script>
//Importing Bar class from the vue-chartjs wrapper
import { Bar } from "vue-chartjs";
//Exporting this so it can be used in other components
export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["12/6", "12/7", "12/8", "12/9", "12/10"],
        datasets: [
          {
            label: "수강생 (결제자)",
            backgroundColor: "#4781EC",
            borderWidth: 1,
            borderColor: "#4781EC",
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90]
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
              // gridLines: {
              //   display: true
              // }
              display: false
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
          position: "bottom"
        },
        responsive: false,
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
