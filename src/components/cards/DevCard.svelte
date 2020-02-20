<script>

    import { currentColors } from '../../stores';

    export let developer;

</script>

<style>
    .card-image {
        width: 242px;
        height: 242px;
    }
</style>

<div class="card" style="background-color: {$currentColors.primaryColor}; color: {$currentColors.secondaryColor};">
    <img src="https://www.github.com/{developer.name}.png" alt="Developer Profile Image" class="card-image">
    <div class="card-content">
        <div class="media">
            <div class="media-content has-text-centered">
                <a href="https://www.github.com/{developer.name}" class="subtitle"><strong>{developer.name}</strong></a>
            </div>
        </div>
        <p>{developer.roles.join('\n')}</p>
    </div>
</div>