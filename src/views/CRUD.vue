<template>
  <div>
    <h1>CRUD TEST</h1>
    <div>
      <div>
        <ul>
          <li v-for="(project, i) in projects" :key="i" class="py-10">
            <a>
              <img
                :src="project.thumbnail"
                alt="대표이미지"
                class="w-full h-64"
              />
            </a>
            <h1>{{ project.className }}</h1>
            <h2>{{ project.trainerName }}</h2>
            <p>{{ project.description }}</p>
            <ul class="flex flex-row items-center">
              <li
                class="inline-block"
                v-for="(tag, i) in project.tags"
                :key="i"
              >
                <span>#{{ tag.value }}</span>
              </li>
            </ul>

            <hr class="w-full my-3" />

            <div class="flex flex-row text-sm items-center">
              ♡ {{ project.likes.length }} ㆍ <i class="far fa-comment"></i>
              {{ project.review.length }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <button @click="getData">button</button> -->
  </div>
</template>

<script>
import { getProjectList } from "@/api/index";
export default {
  data() {
    return {
      projects: [],
      thumbnail: "",
      className: "",
      trainerName: "",
      description: "",
      tags: [],
      likes: [],
      review: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      getProjectList()
        .then(res => {
          this.projects = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

    // getUserData() {
    //   getUserInfo()
    //     .then(res => {
    //       this.projects = res.data.data.projects;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
