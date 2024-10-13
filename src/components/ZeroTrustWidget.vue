<template>
    <v-card outlined>
      <v-card-title>{{ companyName }}</v-card-title>
      <v-card-subtitle>Overall Zero-Trust Score: {{ zeroTrustScore }}</v-card-subtitle>
  
      <v-progress-circular
        :value="zeroTrustScore"
        color="primary"
        :size="100"
        :width="10"
        rotate="-90"
      >
        {{ zeroTrustScore }}%
      </v-progress-circular>
  
      <v-divider class="my-4"></v-divider>
  
      <v-list dense>
        <v-list-item v-for="(score, metric) in metrics" :key="metric">
          <v-list-item-content>
            <v-list-item-title>{{ metric }}</v-list-item-title>
            <v-list-item-subtitle>{{ score.description }}</v-list-item-subtitle>
            <v-progress-linear
              :value="score.score"
              :color="getProgressColor(score.score)"
              height="10"
              rounded
              class="mt-2"
            ></v-progress-linear>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-divider class="my-4"></v-divider>
  
      <v-card-text>
        Risk Category: <strong>{{ riskCategory }}</strong>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "ZeroTrustWidget",
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      companyName() {
        return this.data.companyName || "Unknown Company";
      },
      zeroTrustScore() {
        return this.data.ZeroTrustScore || 0;
      },
      metrics() {
        return this.data.metrics || {};
      },
      riskCategory() {
        return this.data.riskCategory || "Unknown Risk";
      },
    },
    methods: {
      getProgressColor(score) {
        if (score >= 75) return "green";
        if (score >= 50) return "yellow";
        return "red";
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: auto;
    padding: 16px;
  }
  </style>
  