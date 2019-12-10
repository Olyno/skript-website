<script context="module">
	
	export async function preload({ params }) {
		const { slug } = params;
		return { docType: slug };
	}

</script>

<script>

	import { onMount } from 'svelte';
	import { search, firstLetterUpperCase, setupColors } from 'utils';
	import documentation from '../../skript-website-public/docs.json';
	
	import Card from '../../components/Card.svelte';

	export let docType;
	
	let searchValue = '',
		docAmount = 0,
		error;

	// ========== Reactive variable ==========

	$: currentDocumentation = documentation[docType];
	
	// ========== Scroll to elements in url ==========

	$: if (docAmount === Object.keys(documentation[docType]).length) {
		if (window.location.hash) {
			const id = window.location.hash.replace(/\#/g, '');
			const element = document.getElementById(id);
			element.scrollIntoView();
		}
	}

	// ========== Utils functions ==========

	function hasNot(element, ...classNames) {
		for (const className of classNames) {
			if (element.classList.contains(className)) {
				return false;
			}
		}
		return true;
	}
    
    function isValidDocType(doc) {
        const docTypes = ['events', 'conditions', 'effects', 'expressions', 'types', 'functions'];
        for (const currentDocType of docTypes) {
            if (doc === currentDocType) return true;
        }
        return false;
	}
	
	// ========== Setup functions ==========

	async function setupListeners() {
		document.getElementsByClassName('search-input')[0].addEventListener('keyup', async () => {
			error = undefined;
			search(searchValue)
				.catch(() => error = 'Nothing found');
		})
	}

	async function setupLinks() {
		for (const element of document.getElementsByTagName('a')) {
			if (hasNot(element, 'navbar-item', 'navbar-burger', 'navbar-link')) {
				element.outerHTML = element.outerHTML.replace(/href="(\#.+)"/g, `href="${window.location.href.replace(/\#.+/g, '')}$1"`);
			}
		}
	}

	onMount(async () => {
		setupListeners();
		setupLinks();
	//	setupColors();
	})

</script>

<svelte:head>
	<title>Documentation: {firstLetterUpperCase(docType)}</title>
</svelte:head>

{#if docType && isValidDocType(docType)}

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

					{#each currentDocumentation as element}

						<Card class="top" id={element.id} on:mount={() => docAmount ++}>

							<h1 slot="title" class="subtitle">
								<strong>{element.name}</strong>
								<a href="#{element.id}">#</a>
							</h1>

							<div slot="icon">
								{#if element.since}
									<span class="tag is-large" style="background-color: rgb(97, 237, 120)">{element.since}</span>
								{/if}
							</div>

							{#if element.description}
								<label class="label">Description</label>
								<div class="small-section">
									<p>{element.description}</p>
								</div>
							{/if}

							{#if element.patterns}
								<label class="label">Patterns</label>
								<div class="small-section">
									<pre class="skript-code">{element.patterns.join('\n')}</pre>
								</div>
							{/if}

							{#if element.examples}
								<label class="label">Example</label>
								<div class="small-section">
									<pre class="skript-code">{element.examples.join('\n')}</pre>
								</div>
							{/if}

						</Card>

					{/each}

				</div>

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
				<p>This documentation page has not be found or doesn't exist yet. Do you want to create it?</p>
				<br>
				<div class="as is-centered">
					<a class="button is-success" href="https://github.com/Olyno/skript-website-public/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Yes sure</a>
  					<a class="button is-danger" href="/skript-website">Not yet</a>
				</div>
			</div>
		</article>
	</div>

{/if}