<script>

    import { currentColors } from '../../stores';

    export let title;

</script>

<div class="card" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor};">
    <header class="card-header">
        {#if title}
            <p class="card-header-title" style="color: {$currentColors.secondaryColor}">{title}</p>
        {/if}
    </header>
    <div class="card-content">
        <slot></slot>
    </div>
</div>