<template>
    <v-container>
      <ZeroTrustWidget :data="zeroTrustData" />
    </v-container>
  </template>
  
  <script>
  import ZeroTrustWidget from './components/ZeroTrustWidget.vue';
  
  export default {
    name: 'App',
    components: {
      ZeroTrustWidget,
    },
    data() {
      return {
        zeroTrustData: {
          companyName: "FinTechSecure Ltd.",
          ZeroTrustScore: 58.5,
          metrics: {
            Metric1: { score: 75, description: "Firewall Status" },
            Metric2: { score: 65, description: "TLS Version Strength" },
            Metric3: { score: 40, description: "Open Ports Detected" },
          },
          riskCategory: "Moderate Risk",
        },
      };
    },
  };
  </script>
  