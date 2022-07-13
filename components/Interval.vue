<template>
  <div></div>
</template>

<script>
const { JsonRpc } = require("eosjs");
const time = 15000;
export default {
  name: "Interval",
  async mounted() {
    if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false") { 
    this.checkRPC();
    this.launchCheck();
  }
    this.fetchTokens();
    this.fetchTemplate();
    this.launchFetchStake();
    this.launchIntervalTokens();
    this.fetchItems("user");
    this.fetchBuilding();
    this.launchIntervalItems();
  },
  methods: {
    launchCheck: async function () {
      setInterval(async () => {
        this.checkRPC()
      }, 600000)
    },
    checkRPC: async function () {
      let valid = false;

      setTimeout(() => {
        if (valid) {
          valid = false
          console.log("rpc checked")
        }
        else {
          console.log("fuck rpc")
          if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
          if (localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "true")
            valid = true;
          if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
            localStorage.setItem("autoLogin", "rpc")
          }
          window.location.href = "/"
        }
      }, 20000);
      try {
      const rpc = new JsonRpc(this.$store.state.user.wax.rpc.endpoint, { fetch });
        await rpc.get_info().catch((e) => {
            valid = false;
            console.log("fuck rpc")
            if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
            if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
              localStorage.setItem("autoLogin", "rpc")
            }
          window.location.href = "/"
          }).then(() => {
            valid = true;
          });
      }
      catch (e) {
        valid = false;
        console.log("fuck rpc")
        if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
        if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
          localStorage.setItem("autoLogin", "rpc")
        }
        window.location.href = "/"
      }

    },
    launchFetchStake: function () {
      this.fetchStake();
      setInterval(() => {
        this.fetchStake();
      }, time)
    },
    fetchTemplate: async function () {
      await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_table_rows`, {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        body: "{\"json\":true,\"code\":\"dovutilstake\",\"scope\":\"dovutilstake\",\"table\":\"bdata\",\"lower_bound\":null,\"upper_bound\":null,\"index_position\":1,\"key_type\":\"\",\"limit\":\"100\",\"reverse\":false,\"show_payer\":true}",
        method: "POST",
        mode: "cors",
      })
        .then((x) => x.json()).then(async (resu) => {
          const res = resu.rows;
          console.log("template", res)
          this.$store.commit("user/setTemplate", res);
        })
    },
    async fetchRss() {
      await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_table_rows`, {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        body: `{\"json\":true,\"code\":\"dovutilstake\",\"scope\":\"${this.$store.state.user.name}\",\"table\":\"balances\",\"lower_bound\":null,\"upper_bound\":null,\"index_position\":1,\"key_type\":\"\",\"limit\":\"100\",\"reverse\":false,\"show_payer\":true}`,
        method: "POST",
        mode: "cors",
      })
        .then((x) => x.json()).then(async (resu) => {
          const res = resu.rows
          console.log("resss", res)
          const sym = ["DOVF", "DOVH", "DOVR", "DOVS", "DOVX"];
          for (let i = 0; i < res.length; i++) {
            console.log("resi", res[i].data)
            sym.splice(sym.indexOf(res[i].data.balance.split(' ')[1]), 1)
            this.$store.commit("user/setRessource", {
            type: res[i].data.balance.split(' ')[1],
            value: res[i].data.balance.split(' ')[0],
          });
          }
          for (let i = 0; i < sym.length; i++) {
            if (this.$store.state.user.ressources[sym[i]] == undefined) {
              this.$store.commit("user/setRessource", {
                type: sym[i],
                value: "0.0000",
              });
            }
          }
        })
    },
    fetchBuilding: async function () {
      let clock = 0;
      await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_table_rows`, {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        body: `{\"json\":true,\"code\":\"dovutilstake\",\"scope\":\"dovutilstake\",\"table\":\"mships\",\"table_key\":\"\",\"lower_bound\":\"${this.$store.state.user.name}\",\"upper_bound\":\"${this.$store.state.user.name}\",\"index_position\":2,\"key_type\":\"i64\",\"limit\":\"10\",\"reverse\":false,\"show_payer\":false}`,
        method: "POST",
        mode: "cors",
      })
        .then((x) => x.json()).then(async (resu) => {
          console.log("clock", clock)
          const res = resu.rows;
          if (res.length > 0) {
            for (let i in res) {
              clock += parseInt(res[i].rarity);
            }
          }
          
    })
        
       await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_table_rows`, {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        body: `{\"json\":true,\"code\":\"dovutilstake\",\"scope\":\"dovutilstake\",\"table\":\"buildings\",\"table_key\":\"\",\"lower_bound\":\"${this.$store.state.user.name}\",\"upper_bound\":\"${this.$store.state.user.name}\",\"index_position\":2,\"key_type\":\"i64\",\"limit\":\"10\",\"reverse\":false,\"show_payer\":false}`,
        method: "POST",
        mode: "cors",
      })
         .then((x) => x.json()).then(async (resu) => {
           const res = resu.rows;
           const newList = [];
           res.forEach((e) => {
             e.next_availability = new Date(e.last_claim * 1000 + (clock ? (clock * 3600 * 1000) :( e.delay * 1000)))
             e.name = e.asset_id;
             if (!this.$store.state.user.logged_asset.includes(e.asset_id)) {
               this.$store.commit("user/addAsset", e.asset_id);
             }
             if (localStorage.getItem(`${e.asset_id}`)) {
               if (localStorage.getItem(`${e.asset_id}`) == "true") {
                 this.$store.commit("user/setAutoClaim", {
                   type: "buildings",
                   id: e.asset_id,
                   value: true,
                 });
                 this.checker = true;
               } else {
                 this.$store.commit("user/setAutoClaim", {
                   type: "buildings",
                   id: e.asset_id,
                   value: false,
                 });
               }
             }
             newList.push(e);
           })
           console.log('build', res)
           this.$store.commit("user/setBuildings", res);
           if (newList.length) {
            this.$store.commit("user/setItem", { value: newList, type: "buildings" });
          }
        })
    },
    fetchStake: async function () {
      await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_account`, {
        "credentials": "omit",
        "headers": {
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        "body": `{\"account_name\":\"${this.$store.state.user.name}\"}`,
        "method": "POST",
        "mode": "cors"
      }).then((x) => x.json())
        .then(async (rows) => {
          this.$store.commit("user/setStake", parseFloat(rows.total_resources.cpu_weight.split(" ")[0]).toFixed(2));
          this.$store.commit("user/setCPU", (rows.cpu_limit.used * 100 / rows.cpu_limit.max).toFixed(0));
        })
    },
    launchIntervalItems: function () {
      setInterval(() => {
        this.fetchItems("user");
        this.fetchBuilding();
      }, time);
    },
    async fetchItems(item) {
      await fetch(`${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_table_rows`, {
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "text/plain;charset=UTF-8",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
        body: `{\"json\":true,\"code\":\"dovsmartrepo\",\"scope\":\"dovsmartrepo\",\"table\":\"${item}\",\"table_key\":\"\",\"lower_bound\":\"${this.$store.state.user.name}\",\"upper_bound\":\"${this.$store.state.user.name}\",\"limit\":\"1\",\"reverse\":false,\"show_payer\":false}`,
        method: "POST",
        mode: "cors",
      })
        .then((x) => x.json())
        .then(async (items) => {
          if (items.rows.length <= 0) return;
          console.log(items.rows[0].data[0]);
          const data = items.rows[0].data[0];
          const elem = {
            name: data.pool,
            next_availability: data.last_claim * 1000 + (((localStorage.vip) ? parseInt(localStorage.vip) : 1) * 3600000),
            asset_id: "1",
            charged_time: 3600,
          }
          if (!this.$store.state.user.logged_asset.includes(elem.asset_id)) {
            this.$store.commit("user/addAsset", elem.asset_id);
          }
          if (localStorage.getItem(`${elem.asset_id}`)) {
            if (localStorage.getItem(`${elem.asset_id}`) == "true") {
              this.$store.commit("user/setAutoClaim", {
                type: "pool",
                id: elem.asset_id,
                value: true,
              });
              this.checker = true;
            } else {
              this.$store.commit("user/setAutoClaim", {
                type: "pool",
                id: elem.asset_id,
                value: false,
              });
            }
          }
          this.$store.commit("user/setItem", { value: [elem], type: "pool" });
        })
    },
    async launchIntervalTokens() {
      this.fetchTokens();
      this.fetchRss();
      setInterval(() => {
        this.fetchTokens();
        this.fetchRss();
      }, time);
    },
    async fetchTokens() {
      await fetch(
        `${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_currency_balance`,
        {
          credentials: "omit",
          headers: {
            Accept: "*/*",
            "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
            "Content-Type": "text/plain;charset=UTF-8",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
          },
          body: `{\"code\":\"dovvaultfort\",\"account\":\"${this.$store.state.user.name}\"}`,
          method: "POST",
          mode: "cors",
        }
      )
        .then((x) => x.json())
        .then((y) => {
          console.log("tokens", y)
          const sym = ["DOVF", "DOVH", "DOVR", "DOVS", "DOVX"];
          for (let i = 0; i < y.length; i++) {
              console.log(y[i].split(" ")[0], y[i].split(" ")[1])
              sym.splice(sym.indexOf(y[i].split(" ")[1]), 1)
              this.$store.commit("user/setToken", {
                type: y[i].split(" ")[1],
                value: y[i] != undefined ? y[i].split(" ")[0] : "0.0000",
              });
          }
          for (let i = 0; i < sym.length; i++) {
            this.$store.commit("user/setToken", {
              type: sym[i],
              value: "0.0000",
            });
          }
        });

      await fetch(
        `${this.$store.state.user.wax.rpc.endpoint}/v1/chain/get_currency_balance`,
        {
          credentials: "omit",
          headers: {
            Accept: "*/*",
            "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
            "Content-Type": "text/plain;charset=UTF-8",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
          },
          body: `{\"code\":\"eosio.token\",\"account\":\"${this.$store.state.user.name}\",\"symbol\":\"WAX\"}`,
          method: "POST",
          mode: "cors",
        }
      )
        .then((x) => x.json())
        .then((y) => {
          if (y[0] == undefined) {
            this.$store.commit("user/setToken", {
              type: "WAX",
              value: "0.0000",
            });
          } else {
            this.$store.commit("user/setToken", {
              type: "WAX",
              value: y[0] != undefined ? y[0].split(" ")[0] : "0.0000",
            });
          }
        });
    },
  },
};
</script>
