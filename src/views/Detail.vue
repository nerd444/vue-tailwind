<template>
  <div>
    <video autoplay="true" muted="true" loop>
      <source src="@/assets/video1.mp4" />
    </video>

    <!-- 메뉴 -->
    <ul class="flex flex-row items-center font-bold border-b">
      <li v-for="(menu, i) in menus" :key="i" class="px-6 py-3">
        <a
          href=""
          @click.prevent="getMenu(menu.id)"
          class="focus:text-blue-600 focus:border-blue-600 px-6 py-3 border-b-2"
        >
          {{ menu.title }}
        </a>
      </li>
    </ul>

    <!-- 메뉴 내용 -->
    <div class="w-full px-10">
      <!-- 트레이닝정보 -->
      <div v-show="menu === 0">
        <h1 class="font-bold my-2">트레이닝 정보</h1>
        <img :src="thumbnail" alt="" class="h-64 w-full" />
        <h2>{{ className }}</h2>
        <h2>{{ trainerName }}</h2>
        <p>{{ description }}</p>
        <h2>{{ trainningType }}</h2>
        <h2>{{ period }} 주 완성 프로젝트</h2>
        <h2>
          {{
            level == "1"
              ? "초급자 대상"
              : level == "2"
              ? "중급자 대상"
              : level == "3"
              ? "고급자 대상"
              : ""
          }}
        </h2>
        <h2>{{ ages == "all" ? "전 연령층" : "all" }}</h2>

        <h1 class="font-bold my-2">트레이닝 목표</h1>
        <h2>{{ goal }}</h2>
      </div>
      <!-- 커리큘럼 -->
      <div v-show="menu === 1">
        <h1 class="font-bold my-2">커리큘럼</h1>
        <accordion-2
          class="mt-2 mb-6"
          font="font-bold text-lg text-blue-600"
          div-class="w-full p-3 border-transparent rounded-md shadow"
          v-for="(data, i) in weekCuriculums"
          :key="i"
        >
          <template v-slot:title>
            <div>{{ `${i + 1} 주차` }}</div>
          </template>
          <p>{{ data.description }}</p>
        </accordion-2>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectDetail } from "@/api/index";
import Accordion2 from "@/components/Accordion2";
export default {
  components: {
    Accordion2
  },
  data() {
    return {
      menus: [
        {
          id: 0,
          title: "트레이닝정보",
          isActive: false
        },
        {
          id: 1,
          title: "커리큘럼",
          isActive: false
        },
        {
          id: 2,
          title: "트레이너소개",
          isActive: false
        },
        {
          id: 3,
          title: "후기",
          isActive: false
        }
      ],
      menu: 0,
      projectInfo: "",
      trainerInfo: "",
      thumbnail: "",
      className: "",
      trainerName: "",
      description: "",
      trainningType: "",
      period: "",
      level: "",
      ages: "",
      goal: "",

      weekCuriculums: ""
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getMenu(number) {
      this.menu = number;

      for (var i = 0; i < this.menus.length; i++) {
        if (number === this.menus[i].id) {
          this.menus[i].isActive = true;
        } else {
          this.menus[i].isActive = false;
        }
      }
    },
    getProject() {
      getProjectDetail()
        .then(res => {
          if (res.status == 200) {
            this.projectInfo = res.data.data.project;
            this.trainerInfo = res.data.data.trainer;
            this.thumbnail = this.projectInfo.thumbnail;
            this.className = this.projectInfo.className;
            this.trainerName = this.projectInfo.creator.username;
            this.description = this.projectInfo.description;
            this.trainningType = this.projectInfo.trainningType;
            this.period = this.projectInfo.period;
            this.level = this.projectInfo.level;
            this.ages = this.projectInfo.ages;
            this.goal = this.projectInfo.goal;

            this.weekCuriculums = this.projectInfo.weekCuriculums;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
