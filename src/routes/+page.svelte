<script lang="ts">
	import User from '@services/service'
	import UserCard from '@components/UserCard.svelte'
	import BaseButton from '@components/Base/BaseButton.svelte'
	import { fade } from 'svelte/transition'

	let users = User.index()
</script>

<div class="text-center py-5 grid">
	<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
	<p>
		Visit
		<a
			class="text-blue-400"
			href="https://kit.svelte.dev"
		>
			kit.svelte.dev
		</a>
		to read the documentation
	</p>
	<BaseButton
		on:click={() => (users = User.index())}
		classes="w-44 my-5 mx-auto"
	>
		Request new User
	</BaseButton>

	{#await users}
		<p
			transition:fade
			class="my-10 text-2xl font-bold"
		>
			Loading...
		</p>
	{:then users}
		<div class="grid grid-cols-5 gap-3 w-full">
			{#each users as user}
				<UserCard {user} />
			{/each}
		</div>
	{:catch err}
		<p transition:fade>{err}</p>
	{/await}
</div>
