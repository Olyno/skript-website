<script>

	import { onMount } from 'svelte';
	import { currentColors } from '../stores';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import CookiesMessage from '../components/CookiesMessage.svelte';

	let isMounted = false;

	$: if (isMounted) {
		document.getElementsByTagName('html')[0].style.backgroundColor = $currentColors.primaryColor;
	}

	onMount(async () => isMounted = true);

</script>

<svelte:head>
	<title>Skript Website</title>
</svelte:head>

<Navbar />

<main>
	<slot></slot>
	<CookiesMessage />
</main>

<Footer />