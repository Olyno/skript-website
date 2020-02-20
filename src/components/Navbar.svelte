<script>

	import { currentColors } from '../stores';
	import tutorials from '../skript-website-public/tutorials.json';

	import ColorPicker from './ColorPicker.svelte';

	let active = false;

</script>

<div class="navbar" style="background-color: {$currentColors.primaryColor}">
	<div class="navbar-brand">
		<a class="navbar-item is-hidden-touch" href="/skript-website">
			<img alt="Skript logo" src="favicon.png" width="55" height="30">
		</a>
		<a href="#!" on:click|preventDefault={() => active = !active} class="navbar-burger burger {active ? "is-active": ""}" style="color: {$currentColors.secondaryColor}">
			<span></span>
			<span></span>
			<span></span>
		</a>
	</div>
	<div class="navbar-menu {active ? "is-active" : ""}">

		<div class="navbar-start">
			<a href="/skript-website" class="navbar-item is-hidden-desktop" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor};" on:click={() => active = false}>HOME</a>
			<a href="documentation" class="navbar-item" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor};" on:click={() => active = false}>DOCUMENTATION</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a href="tutorials" class="navbar-link" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}" on:click={() => active = false}>TUTORIALS</a>
				<div class="navbar-dropdown" style="background-color: {$currentColors.primaryColor}">
					{#each tutorials as tutorial}
						<a href="tutorials/{tutorial.name.toLowerCase().replace(/\s/gmui, '_')}" class="navbar-item" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}" on:click={() => active = false}>{tutorial.name.toUpperCase()}</a>
					{/each}
				</div>
			</div>
			<a href="release-notes" class="navbar-item" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}" on:click={() => active = false}>RELEASE NOTES</a>
		</div>

		<div class="navbar-end">
			<div class="navbar-item has-dropdown is-hoverable">
				<p class="navbar-link" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}">COLOR PICKER</p>
				<div class="navbar-dropdown">
					<ColorPicker />
				</div>
			</div>
		</div>

	</div>
</div>