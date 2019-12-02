<script>

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	$: if (process.browser) {
		if (window.location.href.match(/#.+$/gmui)) {
			const element = document.getElementById( window.location.href.replace(/^#/gmui, '') );
			if (element) element.scrollIntoView();
		}
	}

</script>

<style>
	.top { margin-top: 4%; }
</style>

<svelte:head>
	<title>Skript Website</title>
</svelte:head>

<Navbar />

<main class="top">
	<slot></slot>
</main>

<Footer />