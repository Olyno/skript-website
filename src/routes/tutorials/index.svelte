<script>
	import tutorials from '../../skript-website-public/tutorials.json';
	import { currentColors } from '../../stores';
</script>

<section class="hero is-fullheight" style="background-color: {$currentColors.primaryColor}">
	<div class="hero-body">
		<div class="container">
			<div class="is-white">
				<div class="section">
					<h1 class="title" style="color: {$currentColors.secondaryColor}">Tutorials</h1>

						<table class="table is-bordered is-striped is-hoverable is-fullwidth" style="background-color: {$currentColors.secondaryColor}; color: {$currentColors.primaryColor}">
							{#each tutorials as tutorial}
								<tr>
									<th>{tutorial.name}</th>
									<td>{tutorial.description}</td>
									<td><a href="tutorials/{tutorial.name.toLowerCase().replace(/\s/gmui, '_')}" class="card-footer-item button" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}">Read</a></td>
								</tr>
							{/each}
						</table>

				</div>
			</div>
		</div>
	</div>
</section>	