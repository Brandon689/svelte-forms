<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';
	//export let data: PageData;
	
	export let form: ActionData;
</script>

{#if form?.success}
    <p>
        dekita!
    </p>
	<!-- <p>Successfully logged in! Welcome back, {data.user.name}</p> -->
{/if}

<div>
    shimasu
</div>

<form method="POST" use:enhance>
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>