<script>

	import { onMount } from 'svelte';
	import { search, firstLetterUpperCase, setupColors } from 'utils';
	import documentation from '../../skript-website-public/docs.json';

	import Card from '../Card.svelte';

	export let docType;

	let searchValue = '',
		docAmount = 0,
		error;

	$: if (docAmount === Object.keys(documentation[docType]).length) {
		if (window.location.hash) {
			const id = window.location.hash.replace(/\#/g, '');
			const element = document.getElementById(id);
			element.scrollIntoView();
		}
	}

	function hasNot(element, ...classNames) {
		for (const className of classNames) {
			if (element.classList.contains(className)) {
				return false;
			}
		}
		return true;
	}

	async function setupListeners() {
		document.getElementsByClassName('search-input')[0].addEventListener('keyup', async () => {
			error = undefined;
			search(searchValue)
				.catch(() => error = 'Nothing found');
		})
		for (const element of document.getElementsByTagName('a')) {
			if (hasNot(element, 'navbar-item', 'navbar-burger', 'navbar-link')) {
				element.outerHTML = element.outerHTML.replace(/href="(\#.+)"/g, `href="${window.location.href.replace(/\#.+/g, '')}$1"`);
			}
		}
	}

	onMount(async () => {
		setupListeners();
		setupColors();
	})

</script>

<svelte:head>
	<title>Documentation: {firstLetterUpperCase(docType)}</title>
</svelte:head>

<div class="section top">

	<div class="container">
	
		<h1 class="title"><strong>{firstLetterUpperCase(docType)}</strong></h1>
	
		<div class="has-text-centered top">
			<input class="input has-text-centered search-input" bind:value={searchValue} type="text" placeholder="Find any syntax">
		</div>

		<div class="columns">

			<div class="column is-12-desktop">

				{#if error}
					<article class="message is-danger top">
						<div class="message-header">
							<p>Error</p>
						</div>
						<div class="message-body">
							<p>{error}</p>
						</div>
					</article>
				{/if}

				{#each Object.keys(documentation[docType]) as element}

					<Card class="top" id={documentation[docType][element].id} on:mount={() => docAmount ++}>

						<h1 slot="title" class="subtitle">
							<strong>{documentation[docType][element].name}</strong>
							<a href="#{documentation[docType][element].id}">#</a>
						</h1>

						<div slot="icon">
							{#if documentation[docType][element].since}
								<span class="tag is-large" style="background-color: rgb(97, 237, 120)">{documentation[docType][element].since}</span>
							{/if}
						</div>

						{#if documentation[docType][element].description}
							<label class="label">Description</label>
							<div class="small-section">
								<p>{documentation[docType][element].description}</p>
							</div>
						{/if}

						{#if documentation[docType][element].patterns}
							<label class="label">Patterns</label>
							<div class="small-section">
								<pre class="skript-code">{documentation[docType][element].patterns.join('\n')}</pre>
							</div>
						{/if}

						{#if documentation[docType][element].examples}
							<label class="label">Example</label>
							<div class="small-section">
								<pre class="skript-code">{documentation[docType][element].examples.join('\n')}</pre>
							</div>
						{/if}

					</Card>

				{/each}

			</div>

		</div>

	</div>

</div>