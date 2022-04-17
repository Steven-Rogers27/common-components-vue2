<template>
	<el-button type="primary">
		<slot></slot>
	</el-button>
</template>
<script>
import { Button } from 'element-ui';

export default {
	name: 'ZtButton',
	components: {
		Button,
	},
}
</script>
<style lang="scss" scoped>

</style>