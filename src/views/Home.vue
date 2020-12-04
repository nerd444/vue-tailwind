<template>
  <div class="h-full flex flex-row">
    <div class="w-screen">
      <div class="flex flex-col">
        <div class="w-1/3 p-4">종류</div>
        <div class="w-2/3 px-4 py-2">
          <accordion-select
            :type="trainingType"
            text="트레이닝"
            :items="[
              '복부 집중 트레이닝',
              '상체 집중 트레이닝',
              '하체 집중 트레이닝',
              ''
            ]"
            @clicked="handleTrainingType"
          >
          </accordion-select>
        </div>
        <!-- 직접 입력 선택으로 (배열에 ''부분만 지우면 됨...!) -->
        <div class="w-1/3 p-4 mt-10">연령대</div>
        <div class="w-2/3 px-4 py-2">
          <accordion-period
            class="bg-gray-200"
            :type="periodType"
            text=" 연령대"
            :isInput="true"
            :items="['20 ~ 30대', '30 ~ 40대', '40 ~ 50대']"
            @clicked="handlePeriodType"
          >
          </accordion-period>
        </div>
      </div>
      <template><span>test</span></template>

      <div class="my-20 w-full px-10">
        <accordion-test
          @clicked="handleType"
          :selectItem="type"
          :items="[
            '복부 집중 트레이닝',
            '상체 집중 트레이닝',
            '하체 집중 트레이닝'
          ]"
        />
      </div>

      <div class="ml-20">
        <select
          name=""
          id=""
          class="appearance-none focus:outline-none border rounded-lg  py-2 px-8"
        >
          <option value="">복부 집중 트레이닝</option>
          <option value="">상체 집중 트레이닝</option>
          <option value="">하체 집중 트레이닝</option>
        </select>
      </div>

      <div>
        <datepicker
          :value="date"
          :language="ko"
          :format="dateFormatter"
          :calendar-button-icon="icon"
          @click="dateEnd"
        ></datepicker>
        <span>
          ~
          <span>{{ endDate }}</span>
        </span>
      </div>

      <tags-input element-id="tags" v-model="selectedTags" :typeahead="true">
        <template v-slot:selected-tag="{ tag, removeTag }">
          <span v-html="tag.value" class="bg-indigo-300"></span>

          <a
            v-show="!disabled"
            href="#"
            class="tags-input-remove bg-indigo-400 text-black"
            @click.prevent="removeTag(index)"
          ></a>
        </template>
      </tags-input>
    </div>
    <accordion-bottom class="fixed bottom-0 w-full" :menus="menu">
    </accordion-bottom>
  </div>
</template>

<script>
import AccordionSelect from "@/components/AccordionSelect";
import AccordionPeriod from "@/components/AccordionPeriod";
import AccordionBottom from "@/components/AccordionBottom";
import AccordionTest from "@/components/AccordionTest";
import Datepicker from "vuejs-datepicker";
import { en, ko } from "vuejs-datepicker/dist/locale";
import moment from "moment";
export default {
  components: {
    AccordionSelect,
    AccordionBottom,
    AccordionPeriod,
    AccordionTest,
    Datepicker
  },
  data() {
    return {
      period: 0,
      trainingType: "",
      periodType: "",
      type: "",
      menu: [
        {
          title: "To Do List",
          icon: "fa-suitcase"
        },
        {
          title: "게시판",
          icon: "fa-user-friends"
        },
        {
          title: "온라인 상담",
          icon: "fa-comment"
        }
      ],
      date: new Date(),
      ko: ko,
      en: en,
      endDate: new Date(),
      icon: "fas fa-chevron-left",
      selectedTags: []
    };
  },
  methods: {
    handlePeriod(item) {
      this.period = Number(item);

      //하루동안의 운동 1개, 식단 1개 오브젝트 초기화
      let day = {
        train: this.workoutlist,
        diet: this.foodlist
      };

      let week = Array.from({ length: this.count }, () => day);
      //프로젝트 기간으로 커리큘럼 셋팅, period는 주(week)를 의미
      this.curriculum = [];
      for (let i = 0; i < this.period; i++) {
        this.curriculum.push(week);
      }
    },
    handleTrainingType(item) {
      this.trainingType = item;
    },
    handlePeriodType(item) {
      this.periodType = item;
    },
    handleType(item) {
      this.type = item;
    },
    dateFormatter(date) {
      return (this.date = moment(date).format("yyyy-MM-DD"));
    },
    dateEnd() {
      this.endDate = moment(this.date)
        .add(6, "M")
        .format("yyyy-MM-DD");
    }
  }
};
</script>

<style scoped>
/* The input */
.tags-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tags-input input {
  flex: 1;
  background: transparent;
  border: none;
}

.tags-input input:focus {
  outline: none;
}

.tags-input input[type="text"] {
  color: #495057;
}

.tags-input-wrapper-default {
  padding: 0.5em 0.25em;

  background: #fff;

  border: 1px solid transparent;
  border-radius: 0.25em;
  border-color: #dbdbdb;
}

.tags-input-wrapper-default.active {
  border: 1px solid #8bbafe;
  box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);
  outline: 0 none;
}

/* The tag badges & the remove icon */
.tags-input span {
  margin-right: 0.3em;
}

.tags-input-remove {
  cursor: pointer;
  position: absolute;
  display: inline-block;
  right: 0.3em;
  top: 0.3em;
  padding: 0.5em;
  overflow: hidden;
}

.tags-input-remove:focus {
  outline: none;
}

.tags-input-remove:before,
.tags-input-remove:after {
  content: "";
  position: absolute;
  width: 75%;
  left: 0.15em;
  background: #5dc282;

  height: 2px;
  margin-top: -1px;
}

.tags-input-remove:before {
  transform: rotate(45deg);
}
.tags-input-remove:after {
  transform: rotate(-45deg);
}

/* Tag badge styles */
.tags-input-badge {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tags-input-badge-pill {
  padding-right: 1.25em;
  padding-left: 0.6em;
  border-radius: 10em;
}
.tags-input-badge-pill.disabled {
  padding-right: 0.6em;
}

.tags-input-badge-selected-default {
  color: #212529;
  background-color: #f0f1f2;
}

/* Typeahead */
.typeahead-hide-btn {
  color: #999 !important;
  font-style: italic;
}

/* Typeahead - badges */
.typeahead-badges > span {
  cursor: pointer;
  margin-right: 0.3em;
}

/* Typeahead - dropdown */
.typeahead-dropdown {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
}

.typeahead-dropdown li {
  padding: 0.25em 1em;
  cursor: pointer;
}

/* Typeahead elements style/theme */
.tags-input-typeahead-item-default {
  color: #fff;
  background-color: #343a40;
}

.tags-input-typeahead-item-highlighted-default {
  color: #fff;
  background-color: #007bff !important;
}
</style>
