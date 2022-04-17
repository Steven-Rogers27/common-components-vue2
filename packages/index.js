import Button from './button';

const components = [
	Button,
];
// 供Vue.use()全局注册所有组件
const install = function (Vue) {
	if (install.installed) return;
	for (let i = 0, len = components.length; i < len; i ++) {
		const component = components[i];
		Vue.component(component.name, component);
	}
};
// vue.js包是在Html文件中直接引入时
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	...components,
};