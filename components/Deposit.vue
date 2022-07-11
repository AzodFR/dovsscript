import Fees from '.';
<template>
  <div class="fees">
    <div class="token-fees">
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVX on your account."
          :variant="d_x ? 'success' : 'danger'"
          @click="switching(0)"
          >Deposit DOVX: {{ d_x ? "ON" : "OFF" }}</b-button
        >
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVH on your account."
          :variant="d_h ? 'success' : 'danger'"
          @click="switching(1)"
          >Deposit DOVH: {{ d_h ? "ON" : "OFF" }}</b-button
        >
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVF on your account."
          :variant="d_f ? 'success' : 'danger'"
          @click="switching(2)"
          >Deposit DOVF: {{ d_f ? "ON" : "OFF" }}</b-button
        >
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVR on your account."
          :variant="d_r ? 'success' : 'danger'"
          @click="switching(3)"
          >Deposit DOVR: {{ d_r ? "ON" : "OFF" }}</b-button
        >
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVS on your account."
          :variant="d_s ? 'success' : 'danger'"
          @click="switching(4)"
          >Deposit DOVS: {{ d_s ? "ON" : "OFF" }}</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/getTokens"]),
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      fees: 0,
      d_x: false,
      d_h: false,
      d_f: false,
      d_r: false,
      d_s: false,
      wam: "",
      pushed: false,
    };
  },
  methods: {
    switching(x) {
      const list = ["d_x", "d_h", "d_f", "d_r", "d_s"];
      let choice;
      if (!x) {
        this.d_x = !this.d_x;
        choice = this.d_x;
      } else if (x == 1) {
        this.d_h = !this.d_h;
        choice = this.d_h;
      } else if (x == 2) {
        this.d_f = !this.d_f;
        choice = this.d_f;
      } else if (x == 3) {
        this.d_r = !this.d_r;
        choice = this.d_r;
      } else if (x == 4) {
        this.d_s = !this.d_s;
        choice = this.d_s;
      }
      localStorage.setItem(list[x], choice);
    },
      deposit() {
          const quantities = [];
          if (this.d_x) {
              const amx = parseFloat(this["user/getTokens"]["DOVX"]).toFixed(4);
              if (amx > 0.0) {
                  quantities.push(`${amx} DOVX`);
              }
          }
          if (this.d_h) {
              const amh = parseFloat(this["user/getTokens"]["DOVH"]).toFixed(4);
              if (amh > 0.0) {
                  quantities.push(`${amh} DOVH`);
              }
          }
          if (this.d_f) {
              const amf = parseFloat(this["user/getTokens"]["DOVF"]).toFixed(4);
              if (amf > 0.0) {
                  quantities.push(`${amf} DOVF`);
              }
          }
          if (this.d_r) {
              const amr = parseFloat(this["user/getTokens"]["DOVR"]).toFixed(4);
              if (amr > 0.0) {
                  quantities.push(`${amr} DOVR`);
              }
          }
          if (this.d_s) {
              const ams = parseFloat(this["user/getTokens"]["DOVS"]).toFixed(4);
              if (ams > 0.0) {
                  quantities.push(`${ams} DOVS`);
              }
          }
          console.log("ressources deposit", quantities);

          if (quantities.length > 0 && !this.pushed) {
              const r_action = {
                  actions: [],
              };
              for (let i in quantities) {
                  r_action.actions.push({
                      account: "dovvaultfort",
                      name: "transfer",
                      authorization: [
                          {
                              actor: this.$store.state.user.name,
                              permission: "active",
                          },
                      ],
                      data: {
                          from: this.$store.state.user.name,
                          to: "dovutilstake",
                          quantitiy: quantities[i],
                          memo: "deposit",
                      },
                  });
              }

              const r_block = {
                  blocksBehind: 3,
                  expireSeconds: 30,
              };
              const r_transac = {
                  id: "deposit",
                  action: r_action,
                  block: r_block,
              };
              console.log("transact deposit", r_action)
              this.pushed = true;
              this.$store.commit("user/addRAction", r_transac);
          

          setTimeout(() => {
              this.pushed = false;
              console.log("deposit available");
          }, 60000);
          console.log("asked for deposit");
      }
      
    },
    launchWithdraw() {
      this.deposit();
      setInterval(() => {
        this.deposit();
      }, 3600 * 1000);
    },
  },
  mounted() {
    if (localStorage.getItem("d_x")) {
      this.d_x = localStorage.getItem("d_x");
    }
    if (localStorage.getItem("d_h")) {
      this.d_h = localStorage.getItem("d_h");
    }
    if (localStorage.getItem("d_f")) {
      this.d_f = localStorage.getItem("d_f");
    }
    if (localStorage.getItem("d_r")) {
      this.d_r = localStorage.getItem("d_r");
    }
    if (localStorage.getItem("d_s")) {
      this.d_s = localStorage.getItem("d_s");
    }

    setTimeout(() => {
      this.launchWithdraw();
    }, 5000);
  },
};
</script>

<style>
.fees {
  display: inline;
  margin-left: 1%;
}

.token-fees {
  display: flex;
  font-size: small;
  margin-bottom: 1%;
}
.token {
  font-size: small;
  width: 30%;
}

.keep {
  font-size: small;
}

.to {
  width: 100%;
  font-size: small;
}

</style>
