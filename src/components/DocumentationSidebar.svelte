<script>

    import { firstLetterUpperCase } from 'utils';
    import { currentColors } from '../stores';
    import docs from '../skript-website-public/docs.json';

</script>

<aside class="menu">
    <p class="menu-label" style="color: {$currentColors.secondaryColor}">Types</p>
    <ul class="menu-list">
        {#each Object.keys(docs) as docType}
            <li>
                <a 
                    href="#{docType.toLowerCase()}"
                    on:click|preventDefault
                    style="color: {$currentColors.secondaryColor}"
                >{firstLetterUpperCase(docType)}</a>
            </li>
        {/each}
    </ul>
</aside>