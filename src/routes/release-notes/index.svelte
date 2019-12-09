<script context="module">
    export async function preload(page, session) {
        let urlValues;
        let releaseHtml;
		const res = await this.fetch('https://github.com/SkriptLang/Skript/releases/latest/', { mode: 'no-cors' });
		if (res) {
            urlValues = res.url.split('/');
            releaseHtml = await res.text();
        }
		return {
            latestVersion: urlValues[urlValues.length - 1] || 'error',
            releaseHtml
        };
	}
</script>

<script>

    import { onMount } from 'svelte';

    export let latestVersion;
    export let releaseHtml;

    let releaseNote;

    onMount(async () => {
        releaseHtml = new DOMParser().parseFromString(releaseHtml, 'text/html');
        releaseNote = releaseHtml.getElementsByClassName('markdown-body')[0].innerHTML;
    })

</script>

<div class="section top">

    <div class="is-white">

        <div class="container section">

            <h1 class="title">Latest version of Skript ({latestVersion})</h1>
            
            {#if latestVersion === 'error'}
            
                <div class="small-section">
                    <article class="message is-danger">
                        <div class="message-body">
                            <p>Can't get the latest version of Skript. Please refresh the page.</p>
                        </div>
                    </article>
                </div>

            {:else}

                {@html releaseNote}

            {/if}

        </div>

    </div>

</div>