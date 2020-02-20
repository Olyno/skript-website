<script context="module">

	import { firstLetterUpperCase } from 'utils';
	
	export async function preload({ params }) {
		const { tutorialName } = params;
		const res = await this.fetch(`tutorials/getTutorials`);
		const tutorials = await res.json();
		const tutorial = {
			title: firstLetterUpperCase(tutorialName.replace(/_/g, ' ')),
			content: tutorials[tutorialName]
				.replace(/\<h1\>/g, '<h1 class="title">')
				.replace(/\<h2\>/g, '<h2 class="subtitle top">')
				.replace(/\<pre\>/g, '<pre class="skript-code">')
				.replace(/\<ul\>/g, '<ul class="is-list">')
				.replace(/\<a href="#(\w+)"\>/g, '<a id="$1" href="#$1">')
		};
		return { tutorial };
	}

</script>

<script>

	import { afterUpdate } from 'svelte';
	import { setupEverything } from 'utils';
	import { currentColors } from '../../stores';

	export let tutorial;

	let mounted;

	tutorial.content = tutorial.content
		.replace(/\<pre class="skript-code"\>/g, `<pre class="skript-code" style="background-color: ${$currentColors.primaryColor}; color: ${$currentColors.secondaryColor};">`)

	$: if (mounted && window.location.hash) {
		const id = window.location.hash.replace(/\#/g, '');
		const element = document.getElementById(id);
		element.scrollIntoView();
	}

	afterUpdate(async () => {
		if (!mounted) {
			setupEverything()
				.then(() => {
					mounted = true;
				})
		}
	})

</script>

<svelte:head>
	<title>Tutorial: {tutorial.title} - Skript Website</title>
</svelte:head>

{#if tutorial.content}
	<div class="section top">
		<div style="background-color: {$currentColors.secondaryColor}; color: {$currentColors.primaryColor}">
			<div class="container section">
				{@html tutorial.content}
			</div>
		</div>
	</div>
{:else}
	<div class="has-text-centered">
		<article class="message is-danger">
			<div class="message-header">
				<p>Error</p>
			</div>
			<div class="message-body">
				<p>This tutorial has not be found or doesn't exist yet. Do you want to create it?</p>
				<br>
				<div class="as is-centered">
					<a class="button is-success" href="https://github.com/Olyno/skript-website-public/tree/master/tutorials">Yes sure</a>
  					<a class="button is-danger" href="/tutorials">Not yet</a>
				</div>
			</div>
		</article>
	</div>
{/if}