<script>

    import { HsvPicker } from 'svelte-color-picker';
    import tinycolor from 'tinycolor2';
    import Cookies from 'js-cookie';
    import { currentColors, defaultColors } from '../stores';

	async function changeColor(e) {
        const newColor = e.detail;
        const isGloballyNaN = Object.keys(newColor)
            .map(k => newColor[k])
            .filter(v => `${v}` === 'NaN')
            .length === 3;
		const backgroundColor = tinycolor(isGloballyNaN ? $currentColors.primaryColor : newColor);
		$currentColors.secondaryColor = backgroundColor.isDark() ? defaultColors.secondaryColor : defaultColors.primaryColor;
        $currentColors.primaryColor = backgroundColor.toRgbString();
        document.getElementsByTagName('html')[0].style.backgroundColor = $currentColors.primaryColor;
    }

</script>

<HsvPicker on:colorChange={changeColor} startColor={tinycolor($currentColors.primaryColor).toHexString()} />