<script context="module">

	import { firstLetterUpperCase } from 'utils';
	
	export async function preload({ params }) {
		const { slug } = params;
		const res = await this.fetch(`tutorials/getTutorials`);
		const tutorials = await res.json();
		const tutorial = {
			title: firstLetterUpperCase(slug.replace(/_/g, ' ')),
			content: tutorials[slug]
				.replace(/\<h1\>/g, '<h1 class="title top">')
				.replace(/\<h2\>/g, '<h2 class="subtitle top">')
				.replace(/(\<pre class="skript-code"\>)/g, '<div class="small-section">$1')
				.replace(/(<\/pre\>)/g, '$1</div>')
				.replace(/(<\/p\>)/g, '$1</div>')
				.replace(/\<ul\>/g, '<ul class="is-list">')
				.replace(/href="\#(.+)"/g, `href="${window.location.href.replace(/\#.+/g, '')}#$1" id="$1"`)
		};
		return { tutorial };
	}

</script>

<script>

	import { onMount } from 'svelte';
	import { setupEverything } from 'utils';

	export let tutorial;

	let mounted;

	$: if (mounted && window.location.hash) {
		const id = window.location.hash.replace(/\#/g, '');
		const element = document.getElementById(id);
		element.scrollIntoView();
	}

	onMount(async () => {
		setupEverything();
		mounted = true;
	})

</script>

<svelte:head>
	<title>Tutorial: {tutorial.title} - Skript</title>
</svelte:head>

{#if tutorial.content}
	<div class="container section is-white">
		{@html tutorial.content}
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