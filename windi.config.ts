import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        cus: "0 0 5px 0 rgba(0,0,6,.14)",
        giftHeader: "0 0.5px 1px 0 rgba(0,0,6,.14)",
      },
      colors: {
        "txt-secondary": "rgba(0,0,0,.54)",
        footer: "rgba(245,241,249,.85)",
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.36)",
        "ftIcon": "hsla(0,0%,100%,.17)",
      },
    },
  },
  plugins: [require("windicss/plugin/forms")],
});
