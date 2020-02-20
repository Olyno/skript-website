<script>

    import { onMount } from 'svelte';
    import { currentColors } from '../stores';

    let visible = false;

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            visible = true;
        } else {
            visible = false;
        }
    }

    async function backTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    onMount(async () => {
        window.onscroll = scrollFunction;
    })

</script>

<style>
    .topButton {
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        cursor: pointer;
        padding: 12px 15px 12px 15px;
        border-radius: 4px;
    }
</style>

{#if visible}
    <button class="topButton" on:click={backTop} style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}"><i class="fas fa-chevron-up"></i></button>
{/if}