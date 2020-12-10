<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <div class="flex flex-col">
        <h1 class="uppercase font-bold w-full text-center my-2">rinechart</h1>
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>
      </div>
      <div class="flex flex-col ml-10">
        <h1 class="uppercase font-bold w-full text-center my-2">rinechart2</h1>
        <h2 class="text-lg font-bold">Today's trends</h2>
        <h3 class="text-sm opacity-50">as of {{ date }}</h3>
        <line-chart2 />
      </div>
    </div>
    <div class="my-10">
      <h1 class="uppercase font-bold w-1/2 text-center my-2">barchart</h1>
      <bar-chart />
    </div>
    <div class="my-10 relative">
      <h1 class="uppercase font-bold w-1/2 text-center my-2">doughnutchart</h1>
      <h2
        class="text-5xl font-bold text-blue-600 absolute bottom-0 w-1/2 text-center ml-40 mb-40"
      >
        60%
      </h2>
      <doughnut />
    </div>
    <div class="my-10">
      <h1 class="uppercase font-bold w-1/2 text-center my-2">piechart</h1>
      <pie-chart />
    </div>
    <div class="my-10">
      <h1 class="uppercase font-bold w-1/2 text-center my-2">radarchart</h1>
      <radar-chart />
    </div>
  </div>
</template>

<script>
import LineChart from "@/mixins/rineChart.js";
import LineChart2 from "@/components/chart/LineChart";
import BarChart from "@/components/chart/BarChart";
import Doughnut from "@/components/chart/Doughnut";
import PieChart from "@/components/chart/PieChart";
import RadarChart from "@/components/chart/RadarChart";
import moment from "moment";

export default {
  components: {
    LineChart,
    LineChart2,
    BarChart,
    Doughnut,
    PieChart,
    RadarChart
  },
  data() {
    return {
      datacollection: null,
      date: moment().format("DD MMMM YYYY, hh:mm a")
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        // x축
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
          {
            label: "Today",
            borderColor: "#4781EC",
            borderWidth: 1.5,
            backgroundColor: "rgb(71,129,236, 0.2)",
            data: [30, 16, 15, 21, 32, 49, 56, 75, 35, 20, 40, 32, 27, 48, 58]
          },
          {
            label: "Yesterday",
            borderColor: "#E8EAEF",
            borderWidth: 1.5,
            backgroundColor: "transparent",
            data: [40, 20, 30, 50, 55, 85, 70, 45, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      };
    }
  }
};
</script>
