<template>
  <div>
    <div class="pt-8 pb-4">
      <ul
        class="flex justify-center px-20 pb-6 border-b-2 border-gray-100 md:justify-between"
      >
        <!-- 여기 -->
        <li class="flex flex-col items-center mr-4 md:mr-0">
          <span
            class="flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-blue-500 md:w-8 md:h-8"
          >
            0
          </span>
          <p class="hidden font-bold text-blue-500 md:block md:mt-3">
            등록방법
          </p>
        </li>
        <!-- 여기 -->
        <li class="inline-block mr-4 text-center md:mr-0">
          <span
            class="px-3 py-2 font-semibold text-white rounded-full bg-gray-500 md:mr-2 md:px-2 md:py-1"
            >1</span
          >
          <p class="hidden text-gray-500 md:block md:mt-3">
            제목 및 썸네일
          </p>
        </li>
        <li class="inline-block mr-4 text-center md:mr-0">
          <span
            class="px-3 py-2 font-semibold text-white rounded-full bg-gray-500 md:mr-2 md:px-2 md:py-1"
            >2</span
          >
          <p class="hidden text-gray-500 md:block md:mt-3">커리큘럼 등록</p>
        </li>
        <li class="inline-block mr-4 text-center md:mr-0">
          <span
            class="px-3 py-2 font-semibold text-white rounded-full bg-gray-500 md:mr-2 md:px-2 md:py-1"
            >3</span
          >
          <p class="hidden text-gray-500 md:block md:mt-3">트레이너 소개</p>
        </li>
        <li class="inline-block mr-4 text-center md:mr-0">
          <span
            class="px-3 py-2 font-semibold text-white rounded-full bg-gray-500 md:mr-2 md:px-2 md:py-1"
            >4</span
          >
          <p class="hidden text-gray-500 md:block md:mt-3">
            제출 전 확인사항
          </p>
        </li>
        <li class="inline-block text-center">
          <span
            class="px-3 py-2 font-semibold text-white rounded-full bg-gray-500 md:mr-2 md:px-2 md:py-1"
            >5</span
          >
          <p class="hidden text-gray-500 md:block md:mt-3">제출완료</p>
        </li>
      </ul>
    </div>

    <hr class="my-10 w-fuil" />

    <!--contents 4.Pre-submission Confirmation 제출 전 확인사항-->
    <div class="p-10">
      <div class="md:grid">
        <!--등록 기간 안내-->
        <div>
          <h2 class="pb-5 text-2xl font-bold text-gray-700">
            등록 기간 안내<span class="ml-2 font-bold text-orange-400">*</span>
          </h2>
          <ul class="flex justify-between mt-10">
            <li class="w-1/5 mr-10 text-center">
              <div class="mb-2">
                <img src="@/assets/premium-sample.svg" class="w-20 h-20" />
              </div>
              <p class="mb-10 text-2xl font-bold text-gray-700">
                프로젝트 등록 제출
              </p>
              <p class="text-lg text-gray-700">
                프로젝트 정보 및 트레이너 정보가 담긴 내용을 작성 후 제출합니다.
              </p>
            </li>
            <!-- 저기 -->
            <li class="w-1/5 text-center">
              <div
                class="mb-2 border border-blue-500 rounded-full flex justify-center items-center w-32 h-32"
              >
                <img src="@/assets/premium-sample.svg" class="w-20 h-20" />
              </div>
              <p class="mb-10 text-2xl font-bold text-gray-700">
                본사 프로젝트 검수
              </p>
              <p class="text-lg text-gray-700">
                본사에서 트레이너님의 강의정보를 받아 검수 후 연락 조치를
                취합니다.
              </p>
            </li>
            <!-- 저기 -->
            <li class="w-1/5 text-center">
              <div class="mb-2">
                <img src="@/assets/premium-sample.svg" class="w-20 h-20" />
              </div>
              <p class="mb-10 text-2xl font-bold text-gray-700">
                본사 1대1 미팅<br />및 운동영상 제작
              </p>
              <p class="text-lg text-gray-700">
                본사와 트레이너가 미팅을 진행해 트레이닝을 구체화, 촬영 편집을
                통해 강의 영상을 제작합니다.
              </p>
            </li>
            <li class="w-1/5 text-center">
              <div class="mb-2">
                <img src="@/assets/premium-sample.svg" class="w-20 h-20" />
              </div>
              <p class="mb-10 text-2xl font-bold text-gray-700">
                프로젝트 등록완료
              </p>
              <p class="text-lg text-gray-700">
                플랫폼에 강의 정보가 올라와 회원들에게 노출됩니다. 본격적으로
                강의가 시작됩니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
