import Fees from '.';
<template>
  <div class="fees">
    <div class="token-fees">
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVX and send it to selected account."
          :variant="x ? 'success' : 'danger'"
          @click="switching(0)"
          >DOVX: {{ x ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(0)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_x"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVH and send it to selected account."
          :variant="h ? 'success' : 'danger'"
          @click="switching(1)"
          >DOVH: {{ h ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(1)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_h"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVF and send it to selected account."
          :variant="f ? 'success' : 'danger'"
          @click="switching(2)"
          >DOVF: {{ f ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(2)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_f"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVR and send it to selected account."
          :variant="r ? 'success' : 'danger'"
          @click="switching(3)"
          >DOVR: {{ r ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(3)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_r"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DOVS and send it to selected account."
          :variant="s ? 'success' : 'danger'"
          @click="switching(4)"
          >DOVS: {{ s ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(4)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_s"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
        <div class="goto">
          <b-button
            size="sm"
            v-b-tooltip.hover
            title="Leave blank if you just want to keep it in your wallet."
            :variant="wam != '' ? 'success' : 'danger'"
            disabled
            >Address to send:</b-button
          >
          <b-input
            type="text"
            placeholder="Wax address"
            v-b-tooltip.hover
            title="Leave blank if you just want to keep it in your wallet."
            v-model="wam"
            @change="editWam"
          ></b-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/getRs"]),
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      fees: 0,
      x: false,
      h: false,
      f: false,
      r: false,
      s: false,
      a_h: 0,
      a_x: 0,
      a_f: 0,
      a_r: 0,
      a_s: 0,
      wam: "",
      pushed: false,
    };
  },
  methods: {
    editWam() {
      localStorage.setItem("to", this.wam);
    },
    editAm(x) {
      if (!x) {
        localStorage.setItem("a_x", this.a_x);
      } else if (x == 1) {
        localStorage.setItem("a_h", this.a_h);
      } else if (x == 2) {
        localStorage.setItem("a_f", this.a_f);
      } else if (x == 3) {
        localStorage.setItem("a_r", this.a_r);
      } else if (x == 4) {
        localStorage.setItem("a_s", this.a_s);
      }
    },
    switching(x) {
      const list = ["x", "h", "f", "r", "s"];
      let choice;
      if (!x) {
        this.x = !this.x;
        choice = this.x;
      } else if (x == 1) {
        this.h = !this.h;
        choice = this.h;
      } else if (x == 2) {
        this.f = !this.f;
        choice = this.f;
      } else if (x == 3) {
        this.r = !this.r;
        choice = this.r;
      } else if (x == 4) {
        this.s = !this.s;
        choice = this.s;
      }
      localStorage.setItem(list[x], choice);
    },
    widthraw() {
      const quantities = [];
      const quantities_token = [];
      if (this.x) {
        const amx = (this["user/getRs"]["DOVX"] - this.a_x).toFixed(4);
        if (amx > 0.0) {
          quantities.push(`${amx} DOVX`);
          quantities_token.push(`${(amx * 0.95 - 0.001).toFixed(4)} DOVX`);
        }
      }
      if (this.h) {
        const amh = (this["user/getRs"]["DOVH"] - this.a_h).toFixed(4);
        if (amh > 0.0) {
          quantities.push(`${amh} DOVH`);
          quantities_token.push(`${(amh * 0.95 - 0.001).toFixed(4)} DOVH`);
        }
      }
      if (this.f) {
        const amf = (this["user/getRs"]["DOVF"] - this.a_f).toFixed(4);
        if (amf > 0.0) {
          quantities.push(`${amf} DOVF`);
          quantities_token.push(`${(amf * 0.95 - 0.001).toFixed(4)} DOVF`);
        }
      }
      if (this.r) {
        const amr = (this["user/getRs"]["DOVR"] - this.a_r).toFixed(4);
        if (amr > 0.0) {
          quantities.push(`${amr} DOVR`);
          quantities_token.push(`${(amr * 0.95 - 0.001).toFixed(4)} DOVR`);
        }
      }
      if (this.s) {
        const ams = (this["user/getRs"]["DOVS"] - this.a_s).toFixed(4);
        if (ams > 0.0) {
          quantities.push(`${ams} DOVS`);
          quantities_token.push(`${(ams * 0.95 - 0.001).toFixed(4)} DOVS`);
        }
      }
      console.log("ressources withdraw", quantities);
      console.log("token transfer", quantities_token);

      if (quantities.length > 0 && !this.pushed) {
        const r_action = {
          actions: [],
        };
        for (let i in quantities) {
          r_action.actions.push({
            account: "dovutilstake",
            name: "withdraw",
            authorization: [
              {
                actor: this.$store.state.user.name,
                permission: "active",
              },
            ],
            data: {
              player: this.$store.state.user.name,
              quantity: quantities[i],
            },
          });
          if (this.wam != "")
          {
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
                to: this.wam,
                quantitiy: quantities_token[i],
                memo: "auto transfer",
            },
          });
          }
        }
        const r_block = {
          blocksBehind: 3,
          expireSeconds: 30,
        };
        const r_transac = {
          id: "withdraw",
          action: r_action,
          block: r_block,
        };
        this.pushed = true;
        this.$store.commit("user/addRAction", r_transac);
       
        setTimeout(() => {
          this.pushed = false;
          console.log("withdraw available");
        }, 60000);
        console.log("asked for withdraw");
      }
    },
    launchWithdraw() {
      this.widthraw();
      setInterval(() => {
        this.widthraw();
      }, 3600 * 1000);
    },
  },
  mounted() {
    if (localStorage.getItem("x") && localStorage.getItem("x") == "true") {
      this.x = true;
    }
    if (localStorage.getItem("h") && localStorage.getItem("h") == "true") {
      this.h = true;
    }
    if (localStorage.getItem("f") && localStorage.getItem("f") == "true") {
      this.f = true;
    }
    if (localStorage.getItem("r") && localStorage.getItem("r") == "true") {
      this.r = true;
    }
    if (localStorage.getItem("s") && localStorage.getItem("s") == "true") {
      this.s = true;
    }
    if (localStorage.getItem("to")) {
      this.wam = localStorage.getItem("to");
    }
    if (localStorage.getItem("a_x")) {
      this.a_x = localStorage.getItem("a_x");
    }
    if (localStorage.getItem("a_h")) {
      this.a_h = localStorage.getItem("a_h");
    }
    if (localStorage.getItem("a_f")) {
      this.a_f = localStorage.getItem("a_f");
    }
    if (localStorage.getItem("a_r")) {
      this.a_r = localStorage.getItem("a_r");
    }
    if (localStorage.getItem("a_s")) {
      this.a_s = localStorage.getItem("a_s");
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
