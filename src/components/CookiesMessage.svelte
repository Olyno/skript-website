<script>

    import { fade } from 'svelte/transition';
    import Cookies from 'js-cookie';
    import { currentColors } from '../stores';

    let isClosed = Cookies.get('preventCookies') !== undefined;

    async function closeCookiesMessage() {
        Cookies.set('preventCookies', true);
        isClosed = true;
    }

</script>

<style>
    .cookieMessage {
        left: 0;
        position: fixed;
        right: 0;
        z-index: 30;
        bottom: 0;
    }
</style>

{#if !isClosed}
    <div class="notification is-info cookieMessage" transition:fade="{{ duration: 1000 }}">
        <div class="level">
            <div class="level-item">
                <p>This website uses cookies for color picker.</p>
            </div>
            <div class="level-item">
                <button class="button" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor}" on:click={closeCookiesMessage}>Got it!</button>
            </div>
        </div>
    </div>
{/if}