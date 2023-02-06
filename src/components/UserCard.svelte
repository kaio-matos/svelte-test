<script lang="ts">
	import type { IUser } from '../services/service'
	import { fade } from 'svelte/transition'
	import Card from './Card.svelte'

	export let user: IUser
</script>

<Card>
	<img
		transition:fade
		src={user.picture.large}
		alt={user.name.first}
		width="250"
		class="pb-7 rounded"
	/>
	<h1 class="mb-5 font-bold text-lg">{user.name.first} {user.name.last}</h1>
	<p>Gender {user.gender.toUpperCase()}</p>
	<p>Nationality {user.nat}</p>
</Card>
