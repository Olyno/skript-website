<script context="module">
	export async function preload(page, session) {
		return this.fetch('https://github.com/SkriptLang/Skript/releases/latest/')
			.then(res => {
				const urlValues = res.url.split('/');
				return { latestVersion: urlValues[urlValues.length - 1] };
			})
			.catch(err => {
				return { latestVersion: 'error' }
			})
	}
</script>

<script>

	import { onMount, afterUpdate } from 'svelte';
	import { setupImages } from 'utils';
	import { currentColors } from '../stores';

	import TextCard from '../components/cards/TextCard.svelte';
	import DevCard from '../components/cards/DevCard.svelte';
	import developers from '../skript-website-public/developers.json';

	export let latestVersion;

	const latestVersionLink = latestVersion !== 'error' ? 
		`https://github.com/SkriptLang/Skript/releases/download/${latestVersion}/Skript.jar`
		: 'https://github.com/SkriptLang/Skript/releases/latest/';

	onMount(async () => {
		setupImages();
	})

	afterUpdate(async () => {
		if (latestVersion === 'error') return document.location.reload(true);
	})

</script>

<style>
	.special-section { padding: 0rem 2rem 0rem 2rem; }
	.main-title { font-size: 40px; justify-content: left; margin-left: 20px; }
	.has-yellow-border {
		border-style: solid;
		border-width: 5px;
	}
</style>

<svelte:head>
	<title>Skript Website</title>
</svelte:head>

<section class="hero is-fullheight" style="background-color: {$currentColors.primaryColor};">
	<div class="hero-body">
		<div class="container">

			<div class="level" style="margin-top: 50px;">
				<img class="level-item" src="favicon.png" alt="Skript icon" width="60px" style="max-width: 150px;">
				<h1 class="main-title level-item" style="color: {$currentColors.secondaryColor}">
					<strong>Documentation</strong>
				</h1>
			</div>

			<div style="background-color: {$currentColors.secondaryColor}; color: {$currentColors.primaryColor}">
				<div class="columns">
					<div class="column is-7">
						
						<div class="special-section">

							{#if latestVersion === 'error'}
								<div class="small-section">
									<article class="message is-danger">
										<div class="message-body">
											<p>Can't get the latest version of Skript. Please refresh the page.</p>
										</div>
									</article>
								</div>
							{/if}

							<div class="section">
								<div class="small-section has-text-centered" style="background-color: {$currentColors.primaryColor}">
									<div class="level">
										<div class="level-item" style="color: {$currentColors.secondaryColor}">
											<p><strong>Download latest</strong></p>
										</div>
										<div class="level-item button is-rounded" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}; border-color: {$currentColors.secondaryColor}" on:click={() => window.open(latestVersionLink)}>
											<a 
												style="color: inherit"
												href={latestVersionLink}
											>{latestVersion === 'error' ? 'Latest' : latestVersion}</a>
										</div>
									</div>
								</div>
							</div>
							
							<div class="small-section">
								<p>
									Skript is (surprise, surprise) a scripting plugin for Bukkit platform. It
									is easy to use for simple tasks, but yet you can create really complex things
									with it. The syntax of Skript is close to English, but it is still not magic.
									While for simple tasks you might succeed with experimentation, for anything
									more complex you will need some guidance.
								</p>
							</div>

							<div class="small-section">
								<p>
									This is the Skript documentation. You will find all supported features of Skript
									plugin here. You might also find some useful examples, in case you need more
									than what was shipped with Skript distribution. We do not currently have
									tutorials here, but you can find good ones using whatever search engine you prefer.
								</p>
							</div>

						</div>

					</div>
					<div class="column">
						<div class="small-section">

							<div class="has-yellow-border">
								<TextCard>
									<p class="content">
										Found something incorrect in this documentation? Please report
										it to the <a href="https://github.com/bensku/Skript/issues">issue tracker</a>.
									</p>
								</TextCard>
							</div>

						</div>

						<div class="small-section">
							<div class="has-yellow-border">
								<TextCard title="Looking for docs author!">
									<p class="content">
										Currently, the only documentation is generated automatically. It would be
										nice to have some hand-written content such as tutorials on the docs as well. For example, currently we don't have
										a tutorial on how to use loops here; This makes it harder for newcomers to learn.
										Check <a href="https://github.com/bensku/Skript/issues/611">this issue</a> for
										more details and if you're interested in helping out.
									</p>
								</TextCard>
							</div>
						</div>

						<div class="small-section">
							<div class="has-yellow-border">
								<TextCard withoutTitle={true}>
									<div class="content has-text-centered">
										<span>
											<i class="fab fa-github"></i>
											<strong>View source codes on GitHub</strong>
										</span>
										<br><br>
										<div class="level">
											<div class="level-item">
												<strong><a href="https://github.com/SkriptLang/Skript">Skript</a></strong>
											</div>
											<div class="level-item">
												<strong><a href="https://github.com/Olyno/skript-website">Website</a></strong>
											</div>
										</div>
									</div>
								</TextCard>
							</div>
						</div>

					</div>

				</div>

				<div class="section">
					<div class="small-section">
						<h1 class="title">Relevant Resources</h1>
						<ul class="is-list">
							<li><a href="https://forums.skunity.com" target="_blank">SkUnity Forums</a></li>
							<li><a href="https://dev.bukkit.org/projects/skript" target="_blank">Original Skript at BukkitDev</a> (inactive)</li>
							<li><a href="https://forums.skunity.com/resources/categories/addons.1/" target="_blank">Addon Releases @SkUnity</a></li>
							<li><a href="https://discord.gg/V4qFVnh" target="_blank">Skript Chat Discord Invite</a></li>
							<li><a href="https://skripthub.net" target="_blank">SkriptHub</a></li>
						</ul>
					</div>
				</div>

				<div class="section">
					<div class="small-section">
						<h1 class="title">Developers</h1>
						<div class="columns is-multiline has-text-centered">
							{#each developers as developer}
								<div class="column is-3">
									<DevCard {developer} />
								</div>
							{/each}
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>