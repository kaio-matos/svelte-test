<script lang="ts">
	import { fade } from 'svelte/transition'

	import { users } from '@stores/User'

	import BaseInput from '@components/Base/BaseInput.svelte'
	import BaseButton from '@components/Base/BaseButton.svelte'
	import UserCard from '@components/UserCard.svelte'

	let promise = users.actions.updateUsers()
	let search = ''

	$: people = users.getters.maleUsers($users)
	$: filteredPeople = people.filter(({ name }) =>
		`${name.first} ${name.last}`.toLowerCase().includes(search.toLowerCase())
	)
</script>

<div class="text-center py-5 grid">
	<h1 class="text-3xl font-bold">Welcome to Users</h1>
	<p>
		Visit
		<a
			class="text-blue-400"
			href="/users/hello-world"
		>
			Hello World
		</a>
		to read other users data, or see our
		<a
			class="text-blue-400"
			href="/users/joao"
		>
			404
		</a> page
	</p>
	<BaseButton
		on:click={() => users.actions.updateUsers()}
		classes="w-44 my-5 mx-auto"
	>
		Request new Users
	</BaseButton>
	<BaseInput
		bind:value={search}
		classes="w-44 mx-auto"
		placeholder="Search"
	/>

	{#await promise}
		<p
			transition:fade
			class="my-10 text-2xl font-bold"
		>
			Loading...
		</p>
	{:then}
		{#if filteredPeople?.length}
			<div class="grid grid-cols-5 gap-3 w-full">
				{#each filteredPeople as user (user.id.name + user.registered.date)}
					<UserCard {user} />
				{/each}
			</div>
		{/if}
	{:catch err}
		<p transition:fade>{err}</p>
	{/await}
</div>
