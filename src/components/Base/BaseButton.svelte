<script>
	// The use of $$props or $$restProps is not recommended by svelte
	// https://stackoverflow.com/questions/48960847/automatically-passing-html-attributes-to-svelte-components
	export let classes = ''
</script>

<button
	on:click
	class={`
		px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all ${classes}
	`}
>
	<slot />
</button>
