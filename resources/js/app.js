import './bootstrap';

import { createApp } from 'vue';
import PostsIndex from './components/Posts/index.vue';

const app = createApp({});

app.component('PostsIndex', PostsIndex);

app.mount("#app");