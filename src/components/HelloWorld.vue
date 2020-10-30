<template>
  <div class="w-full flex items-center">
  <form class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="flex justify-center">
      <img class="max-w-xs" src="../assets/logo.png" alt="Sunset in the mountains">
    </div>
    <div class="mb-4 mx-64">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        아이디
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6 mx-64">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        비밀번호
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between mx-64">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        로그인
      </button>
    </div>
    <div class="flex justify-between mx-64">
      <a class="inline-block font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        아이디/비밀번호 찾기
      </a>
      <a class="inline-block font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        회원가입
      </a>
    </div>
  </form>
</div>
</template>

<script>
export default {

}
</script>

