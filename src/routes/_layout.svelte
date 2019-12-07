<script>

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

</script>

<style>
	.content {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>

<svelte:head>
	<title>Skript Website</title>
</svelte:head>

<Navbar />

<main class="content">
	<slot></slot>
</main>

<Footer />