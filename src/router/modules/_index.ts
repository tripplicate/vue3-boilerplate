import { RouteRecordRaw } from "vue-router";

const files = import.meta.globEager("./**/index.ts");
const routes: RouteRecordRaw[] = [];

Object.keys(files).forEach(path => {
  const module = files[path].default as RouteRecordRaw[];
  routes.push(...module);
});

export default routes;
