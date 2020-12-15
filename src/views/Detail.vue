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
      <!-- 트레이너소개 -->
      <div v-show="menu === 2">
        <h1 class="font-bold my-2">트레이너 소개</h1>
        <img :src="profileImages" alt="" class="mx-10 w-48 h-64" />
        <h2>{{ trainerName }}</h2>
        <p class="text-blue-500 text-xs">
          프리미엄 트레이닝 제공 트레이너 입니다.
        </p>

        <h2>자격 사항</h2>
        <!-- v-for="(cert, i) in certificates" :key="i" -->
        <ul class="text-sm">
          <li>비었</li>
          <li>비었</li>
        </ul>

        <h2>경력 사항</h2>
        <ul class="text-sm">
          <li v-for="(data, i) in careers" :key="i">{{ data[0] }}</li>
        </ul>
      </div>
      <!-- 후기 -->
      <div v-show="menu === 3">
        <h1 class="font-bold my-2">후기</h1>
        <ul>
          <li v-for="(review, i) in reviews" :key="i" class="p-3 border-b">
            <span class="flex flex-row">
              <img
                :src="review.author.avatar"
                alt=""
                class="w-10 h-10 border-transparent rounded-full mr-4"
              />
              <span class="flex flex-col">
                <h2>{{ review.author.username }}</h2>
                <h3>
                  {{ moment(review.createdAt).format("YYYY.MM.DD HH:mm") }}
                </h3>
              </span>
            </span>
            <p class="py-4">{{ review.comment }}</p>
          </li>
        </ul>
      </div>
    </div>

    <hr class="w-full my-10" />

    <!-- 프리미엄 이용안내 -->
    <div>
      <h1 class="font-bold my-2">프리미엄 이용 !!</h1>
      <p>트레이너님과 직접 연락을 주고 받으며 밀착 관리를 받는 시스템입니다.</p>
      <accordion-2
        class="mt-2 mb-6"
        font="font-bold text-gray-600 flex justify-between items-center"
        div-class="p-3"
        :shadow="true"
      >
        <template v-slot:title>
          <span>홍길동 트레이너 프리미엄 리뷰 보기</span>
        </template>
        리뷰들
      </accordion-2>
      <h2>프리미엄 PT 장소</h2>
      <div class="border rounded-lg w-48">
        {{ addressDetail + " " + address }}
      </div>
      <h2>이용요금</h2>
      <div>
        <div class="flex justify-between">
          <h3>프로젝트 참가비</h3>
          <div class="border rounded-lg text-center px-10 relative">
            {{ cost.toLocaleString() }}
            <span class="absolute right-0 mr-2">￦</span>
          </div>
        </div>
        <div class="flex justify-between">
          <h3>1:1 온라인 상담</h3>
          <div class="border rounded-lg text-center px-10 relative">
            {{ consultingFee.toLocaleString() }}
            <span class="absolute right-0 mr-2">￦</span>
          </div>
        </div>
        <div class="flex justify-between text-lg font-bold">
          <h3>총 수강료</h3>
          <div>{{ totalcost.toLocaleString() }} ￦</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectDetail, getReviewList } from "@/api/index";
import Accordion2 from "@/components/Accordion2";
import moment from "moment";
export default {
  components: {
    Accordion2
  },
  data() {
    return {
      moment: moment,
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
      thumbnail: "",
      className: "",
      trainerName: "",
      description: "",
      trainningType: "",
      period: "",
      level: "",
      ages: "",
      goal: "",

      weekCuriculums: "",

      trainerInfo: "",
      profileImages: "",
      certificates: [],
      careers: [],

      reviews: [],
      avatar: "",
      authorName: "",
      createdAt: "",
      comment: "",

      addressDetail: "",
      address: "",
      cost: 0,
      consultingFee: 0,
      totalcost: 0
    };
  },
  mounted() {
    this.getProject();
    this.getCommentList();
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
            this.projectId = res.data.data.project._id;

            this.projectInfo = res.data.data.project;
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

            this.trainerInfo = res.data.data.trainer;
            this.profileImages = this.trainerInfo.profileImages[0];
            this.certificates = this.trainerInfo.certificates;
            this.careers = this.trainerInfo.careers;

            this.addressDetail = this.projectInfo.creator.addressDetail;
            this.address = this.projectInfo.creator.address;
            this.cost = this.projectInfo.cost;
            this.consultingFee = this.projectInfo.consultingFee;

            this.totalcost = this.cost + this.consultingFee;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCommentList() {
      getReviewList()
        .then(res => {
          this.reviews = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
