<script context="module">
    export async function preload(page, session) {
        return this.fetch('https://github.com/SkriptLang/Skript/releases/latest/', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                return Promise.all([res.text(), res.url.split('/')]);
            })
            .then(([releaseHtml, urlValues]) => {
                return {
                    latestVersion: urlValues[urlValues.length - 1],
                    releaseHtml
                };
            })
            .catch(err => {
                return {
                    latestVersion: 'error',
                    releaseHtml: ''
                };
            })
	}
</script>

<script>

    import { afterUpdate } from 'svelte';
    import { currentColors } from '../../stores';

    export let latestVersion;
    export let releaseHtml;

    let releaseNote;

    afterUpdate(async () => {
        if (latestVersion === 'error') return document.location.reload(true);
        releaseHtml = new DOMParser().parseFromString(releaseHtml, 'text/html');
        releaseNote = releaseHtml.getElementsByClassName('markdown-body')[0].innerHTML;
    })

</script>

<div class="section">

    <div style="color: {$currentColors.secondaryColor}">

        <h1 class="title" style="color: {$currentColors.secondaryColor}">Latest version of Skript ({latestVersion})</h1>
        
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