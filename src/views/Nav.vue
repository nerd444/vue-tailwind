<template>
  <div>
    <ul>
      <li v-for="(data, i) in weekCuriculums" :key="i">
        <accordion
          font="font-bold text-xl text-primary-200"
          div-class="w-full p-3 border-transparent rounded-md shadow"
        >
          <template v-slot:title>
            <div>{{ `${i + 1}주차` }}</div>
          </template>

          <div class="md:grid-cols-10 md:grid md:grid-row-11">
            <div
              class="md:col-span-6 md:col-start-1 md:row-start-1 md:row-span-2"
            >
              <!--1주차 안에 트레이닝 설명과 바로 밑에 들어가는 상세설명 파트-->
              <div class="md:row-span-2 md:row-start-2">
                <h2
                  class="pb-5 text-xl font-bold md:text-2xl text-secondly-400"
                >
                  주차별 트레이닝 설명<span
                    class="ml-2 font-bold text-basicOrange"
                    >*</span
                  >
                </h2>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="내용을 입력해주세요"
                  maxlength="300"
                  required
                  class="w-full h-32 p-4 border-2 rounded-lg border-secondly-100"
                  style="resize:none;"
                ></textarea>
                <p
                  class="mt-2 text-sm text-right md:text-base text-secondly-100"
                >
                  글자수 제한 300자
                </p>
              </div>
            </div>
            <div
              class="px-10 mt-3 rounded-lg md:mt-20 bg-secondly-100 py-7 md:col-span-3 md:col-start-8 md:row-span-2 md:row-start-1"
            >
              <h3
                class="pb-5 text-lg font-semibold md:text-xl text-secondly-500"
              >
                트레이닝 커리큘럼 - 주차
              </h3>
              <ul class="pl-3 text-sm list-disc list-outside text-secondly-500">
                <li class="pb-3 text-primary-200">
                  커리큘럼 작성을 모두 마쳐야 제출이 가능하며, 추후 수정은
                  불가하오니 신중하게 작성 부탁드립니다.
                </li>
                <li class="pb-3">
                  주차별 트레이닝의 큰 틀을 잡아주세요. 첫 주차에 주로 할
                  내용이나 첫 주의 목표를 작성해주세요.
                </li>
                <li>
                  (ex. 복부 지방 빼기 첫단계 습관부터 고치자! 간단한 생활속 운동
                  팁! 회원님에게 딱 맞는 간단한 운동을 알려드립니다.)
                </li>
              </ul>
            </div>
          </div>
        </accordion>
      </li>
    </ul>
  </div>
</template>
