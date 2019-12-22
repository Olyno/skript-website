<script>

	import { onMount, createEventDispatcher } from 'svelte'

	let clazz = "";
	export let id = "";
	export let image = "";
	export let withoutTitle = false;
	export let isSquare = false;
	export let style = "";
	export { clazz as class };

	const dispatch = createEventDispatcher();
	const squareSize = '189.17';

	onMount(async () => {
		dispatch('mount');
	})

</script>

<div class="card {clazz}" {id} {style}>
	{#if image !== ""}
		<div class="card-image">
			<img 
				src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
				width={isSquare ? squareSize : ''}
				height={isSquare ? squareSize : ''}
				data-src="{image}"
				alt="Placeholder image"
			/>
		</div>
	{/if}
	<header class="card-header">
		{#if !withoutTitle}
			<div class="card-header-title">
				<slot name="title"></slot>
			</div>
		{/if}
		<slot name="header"></slot>
		<slot name="icon"></slot>
	</header>
	<div class="card-content">
		<slot></slot>
	</div>
	<slot name="footer"></slot>
</div>