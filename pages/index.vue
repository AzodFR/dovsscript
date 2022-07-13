<template>
  <div>
     <div class="devinfo">
      <p class="txt">
        Created by
        <span class="dev1"> Azod#9999 (vzfjg.wam) </span>
        (v0.5.9)
      </p>
    </div>
    <DefiLogo v-if="name == ''"/>
    <Login v-if="name == ''" />
    <div v-else>
      <Interval />
      <Test />
    </div>
    <div class="wax-stake" v-if="!refresh">
    <div class="rent-cpu" data-nWax="50" data-length="3"></div>
    <div class="rent-cpu" data-nWax="50" data-length="7"></div>
    <div class="rent-cpu" data-nWax="50" data-length="30"></div>
    </div>
    <div class="wax-stake" v-if="!refresh">
    <div class="rent-cpu" data-nWax="100" data-length="3"></div>
    <div class="rent-cpu" data-nWax="100" data-length="7"></div>
    <div class="rent-cpu" data-nWax="100" data-length="30"></div>
    </div>
  </div>
</template>

<script>
var stakewax_config = {class: 'rent-cpu' , ref: 3}
import DefiLogo from "../components/DefiLogo.vue";
import Login from "../components/Login.vue";
import Interval from "../components/Interval.vue";
import Test from "~/components/Test.vue";
import Buffer from "../components/Buffer.vue";


export default {
  name: "IndexPage",
  components: {
    DefiLogo,
    Login,
    Interval,
    Test,
    Buffer,
  },
  data() {
      return {
        refresh: false,
      }
  },
    mounted() {
      setInterval(() => {
          this.refresh = true;
        this.refresh = false;
          console.log("refreshed stake")
      }, 60000);
    },
  computed: {
    name() {
      return this.$store.state.user.name;
    },
    
  },
};
</script>

<style>
body {
  /* background-color: #111c38; */
  background-color: rgb(34, 34, 34);
  color: aliceblue;
}

.devinfo {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: rgba(58, 58, 58, 0.096);
}
.txt {
  text-align: left;
  font-weight: bold;
  margin-left: 20px;
}
.dev1 {
  color: #d666e0;
}
.dev2 {
  color: #e74c3c;
}
.wax-stake {
  height: 64px;
  display: flex;
  margin-top: 3%;
  justify-content: center;
}

</style>
