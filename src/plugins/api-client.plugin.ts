import Vue from "vue";
import ApiClient from 'api-client';

const ApiClientPlugin = {
  install(vue: typeof Vue): void {
    vue.$apiClient = new ApiClient();
  }
}

export { ApiClient, ApiClientPlugin };
