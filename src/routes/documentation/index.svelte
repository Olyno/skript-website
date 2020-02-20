<script>

    import { onMount } from 'svelte';
    import documentation from '../../skript-website-public/docs.json';
    import { currentColors } from '../../stores';
	import { setupColors, setupLinks, search, firstLetterUpperCase } from 'utils';

    import SyntaxCard from '../../components/cards/SyntaxCard.svelte';
    import TopArrow from '../../components/TopArrow.svelte';
    import DocumentationSidebar from '../../components/DocumentationSidebar.svelte';

    let searchingSyntax = '';

    const currentDocumentation = Object.keys(documentation)
        .map(docType => {
            return {
                type: docType,
                syntaxes: documentation[docType]
                    .map(syntax => {
                        return {
                            ...syntax,
                            since: {
                                hoverText: syntax.since.join('').split('').slice(10).join(''),
                                text: syntax.since.join('').split('').slice(0, 10).join(''),
                                version: syntax.since.join('')
                            }
                        }
                    })
            }
        })

    $: searchingSyntaxes = currentDocumentation
        .map(element => {
            return {
                ...element,
                syntaxes: element.syntaxes
                    .filter(syntax => 
                        syntax.name.toLowerCase().includes( searchingSyntax.toLowerCase() ) 
                        || syntax.patterns.join('\n').toLowerCase().includes( searchingSyntax.toLowerCase() )
                    )
            }
        })
    
    onMount(async () => {
        setupColors();
        setupLinks();
    });

</script>

<style>
    .search-input { border-style: none; }
</style>

<svelte:head>
	<title>Documentation - Skript Website</title>
</svelte:head>

<TopArrow />

<div class="section">

    <div class="columns">

        <div class="column is-2 is-hidden-mobile">
            <DocumentationSidebar />
        </div>

        <div class="column is-10">

            <div class="has-text-centered">
                <input class="input search-input is-secondary-bg" bind:value={searchingSyntax} type="text" placeholder="Find any syntax">
            </div>

            {#each searchingSyntaxes as element}

                <h1 class="title is-4 top" id="{element.type.toLowerCase()}" style="color: {$currentColors.secondaryColor}"><strong>{firstLetterUpperCase(element.type)}</strong></h1>

                {#each element.syntaxes as syntax}

                    <div id="{syntax.id.toLowerCase()}" class="top">
                        <SyntaxCard {syntax} />
                    </div>

                {/each}

            {/each}

        </div>

    </div>

</div>