<script lang="ts">
	export let value = ''
	export let placeholder = ''
	export let classes = ''
</script>

<input
	type="text"
	{placeholder}
	bind:value
	class={`p-4 border shadow-sm outline-none ${classes}`}
/>
