<template>
  <v-container fluid>
    <v-row dense>
      <v-col class="mb-4">
        <h1 class="text-h5 text-md-h3 font-weight-bold mb-4">
          <v-btn icon medium @click="toList">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          Crawler configuration {{ $route.params.id }}
        </h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="url"
            :rules="urlRules"
            label="Website URL"
            required
          ></v-text-field>

          <v-textarea
            v-model="crawlerConfig"
            :rules="crawlerConfigRules"
            solo
            label="Config"
          ></v-textarea>

          <v-btn :disabled="!valid" color="success" type="submit">
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

function testUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export default Vue.extend({
  name: 'Crawler-Page',
  data: () => ({
    valid: true,
    url: '',
    urlRules: [
      (v: any) => Boolean(v) || 'URL is required',
      (v: string) => testUrl(v) || 'URL is invalid'
    ],
    crawlerConfig: '',
    crawlerConfigRules: [(v: any) => Boolean(v) || 'Config is required']
  }),

  methods: {
    onValidate() {
      return (this.$refs.form as HTMLFormElement).validate();
    },
    onSubmit() {
      this.valid = this.onValidate();
      if (!this.valid) return;
    },
    toList() {
      this.$router.push('/crawler');
    }
  }
});
</script>
