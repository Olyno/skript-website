<script>
	import tutorials from '../../skript-website-public/tutorials.json';
	import { currentColor } from '../../stores';
</script>

<section class="hero is-fullheight" style="background-color: {$currentColor.backgroundColor}">
	<div class="hero-body">
		<div class="container">
			<div class="is-white">
				<div class="section">
					<h1 class="title">Tutorials</h1>

						<table class="table is-bordered is-striped is-hoverable is-fullwidth">
							{#each Object.keys(tutorials) as tutorial}
								<tr>
									<th>{tutorial}</th>
									<td>{tutorials[tutorial].description}</td>
									<td><a href="tutorials/{tutorial.toLowerCase().replace(/\s/gmui, '_')}" class="card-footer-item button is-success">Read</a></td>
								</tr>
							{/each}
						</table>

				</div>
			</div>
		</div>
	</div>
</section>	