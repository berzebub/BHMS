<template>
  <q-page class="flex flex-center">
    <div style="width:740px;height:450px;" class=" row">
      <div style="width:300px">
        <q-img style="width:99.5%" src="../../public/images/login.png"></q-img>
      </div>
      <div
        class="col full-height"
        style="background-color:#020305;border-radius:0px 20px 20px 0px"
      >
        <div align="center" class="text-white  q-pt-xl q-pb-lg ">
          <span class="font-36">
            SMART BHMS
          </span>
          <br />
          <span class="font-18">
            Bridge Health Monitor System
          </span>
        </div>
        <div class="q-px-xl  text-white">
          <div>Username</div>
          <q-input
            dark
            placeholder="Enter you username"
            v-model="username"
          ></q-input>
          <div class="q-pt-md">Password</div>
          <q-input
            dark
            placeholder="Enter you username"
            v-model="password"
          ></q-input>
        </div>

        <div class="q-pt-lg" align="center">
          <q-btn
            dense=""
            label="Login"
            style="width:200px"
            class="font-18 text-black"
            color="teal"
          ></q-btn>
        </div>
        <div class="text-white font-14" style="padding-top:37px" align="center">
          TSPK Inspection & Consultant Co.,ltd
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
