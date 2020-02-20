<script>

    import { currentColors } from '../../stores';

    export let syntax;

    let sinceIsHover = false;

</script>

<div class="card" style="background-color: {$currentColors.secondaryColor}; color: {$currentColors.primaryColor};">
    <header class="card-header">
        <div class="card-header-title">
            <div class="level">
                <div class="level-left">
                    <a href="#{syntax.id}" class="level-item title is-4" style="color: {$currentColors.primaryColor}">
                        {syntax.name}
                    </a>
                    {#if syntax.since}
                        <span
                            class="tag is-large level-item"
                            style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor};"
                            on:mouseenter={() => sinceIsHover = true}
                            on:mouseleave={() => sinceIsHover = false}
                        >
                            {#if syntax.since.hoverText}

                                {#if sinceIsHover}
                                    {`${syntax.since.text}${syntax.since.hoverText}`}
                                {:else}
                                    {`${syntax.since.text} ...`}
                                {/if}

                            {:else}
                                {syntax.since.text}
                            {/if}
                        </span>
                    {/if}
                </div>
            </div>
        </div>
    </header>
    <div class="card-content">

        {#if syntax.description}
            <label class="label" style="color: {$currentColors.primaryColor}">Description</label>
            <div class="small-section">
                <p>{syntax.description}</p>
            </div>
        {/if}

        {#if syntax.patterns}
            <label class="label" style="color: {$currentColors.primaryColor}">Patterns</label>
            <div class="small-section">
                <pre class="skript-code" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}">{syntax.patterns.join('\n')}</pre>
            </div>
        {/if}

        {#if syntax.examples}
            <label class="label" style="color: {$currentColors.primaryColor}">Example</label>
            <div class="small-section">
                <pre class="skript-code" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}">{syntax.examples.join('\n')}</pre>
            </div>
        {/if}

    </div>
</div>