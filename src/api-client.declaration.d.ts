// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue';
import { ApiClient } from './plugins/api-client.plugin';

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $apiClient: ApiClient
  }
}