<script>

    import { HsvPicker } from 'svelte-color-picker';
    import tinycolor from 'tinycolor2';
    import Cookies from 'js-cookie';
    import { currentColor } from '../stores';

    if (!$currentColor.backgroundColor) {
		$currentColor = {
			color: Cookies.get('color') || 'black', 
			backgroundColor: Cookies.get('backgroundColor') || '#d6de79'
		}
	}

	async function changeColor(e) {
        const newColor = e.detail;
        const isGloballyNaN = Object.keys(newColor)
            .map(k => newColor[k])
            .filter(v => `${v}` === 'NaN')
            .length === 3;
		const color = tinycolor(isGloballyNaN ? $currentColor.backgroundColor : newColor);
		$currentColor.color = color.isDark() ? 'white' : 'black';
        $currentColor.backgroundColor = color.toRgbString();
        document.getElementsByTagName('html')[0].style.backgroundColor = $currentColor.backgroundColor;
		Cookies.set('backgroundColor', $currentColor.backgroundColor);
    }

</script>

<HsvPicker on:colorChange={changeColor} startColor={$currentColor.backgroundColor} />