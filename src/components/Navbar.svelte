<script>

	import { currentColor } from '../stores';
	import tutorials from '../skript-website-public/tutorials.json';

	import ColorPicker from './ColorPicker.svelte';

	let active = false;

</script>

<div class="navbar is-fixed-top" style="background-color: {$currentColor.backgroundColor}">
	<div class="navbar-brand">
		<a class="navbar-item is-hidden-touch" href="/skript-website">
			<img alt="Skript logo" src="favicon.png" width="55" height="30">
		</a>
		<a href="#!" on:click|preventDefault={() => active = !active} class="navbar-burger burger {active ? "is-active": ""}">
			<span></span>
			<span></span>
			<span></span>
		</a>
	</div>
	<div class="navbar-menu {active ? "is-active" : ""}">

		<div class="navbar-start">
			<a href="/skript-website" class="navbar-item is-hidden-desktop">HOME</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a href="documentation" on:click|preventDefault class="navbar-link">DOCUMENTATION</a>
				<div class="navbar-dropdown">
					<a href="documentation/events" class="navbar-item">EVENTS</a>
					<a href="documentation/conditions" class="navbar-item">CONDITIONS</a>
					<a href="documentation/effects" class="navbar-item">EFFECTS</a>
					<a href="documentation/expressions" class="navbar-item">EXPRESSIONS</a>
					<a href="documentation/types" class="navbar-item">TYPES</a>
					<a href="documentation/functions" class="navbar-item">FUNCTIONS</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a href="tutorials" class="navbar-link">TUTORIALS</a>
				<div class="navbar-dropdown">
					{#each Object.keys(tutorials) as tutorial}
						<a href="tutorials/{tutorial.toLowerCase().replace(/\s/gmui, '_')}" class="navbar-item">{tutorial.toUpperCase()}</a>
					{/each}
				</div>
			</div>
			<a href="release-notes" class="navbar-item">RELEASE NOTES</a>
		</div>

		<div class="navbar-end">
			<div class="navbar-item has-dropdown is-hoverable">
				<p class="navbar-link">COLOR PICKER</p>
				<div class="navbar-dropdown">
					<ColorPicker />
				</div>
			</div>
		</div>

	</div>
</div>