import Vue from 'vue';
import * as ElementUI from 'element-ui';

const components = [
  'Button',
  'Input',
];

components.forEach((comp) => {
  Vue.use(ElementUI[comp]);
});

Vue.prototype.$message = ElementUI.Message;
