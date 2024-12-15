<script lang="ts">
	import '../app.css'
	import { 
		ThemeProvider, 
		Header,
		ColorThemeSwitch
	} from "svelte-elegant";
	import { themeMode } from 'svelte-elegant/stores/themeStore';
	import type { IColorThemeStore } from "svelte-elegant/interfaces";
	import { themeStore } from "svelte-elegant/stores/themeStore";

	let theme: IColorThemeStore | undefined;

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value; //Инициализация объекта темы
	});

	let { children } = $props();
</script>

<Header height = 3.5rem>
	<button style:gap = '0.5rem'>
		<img src = {$themeMode === 'light' ? '/Images/Logo.svg' : '/Images/Logo.svg'} alt = 'logo' class = 'logo' />
		<p style:font-size=26px>
			<span 
				style:color = {theme?.colors.primary}
				style:transition = 'all 0.3s'
			>
				English Assistant
			</span> 
		</p>
	</button>
	<div 
		style:margin-left = auto
		style:margin-right = 1.25rem
	>
		<ColorThemeSwitch />
	</div>
</Header>

<ThemeProvider>
	<div class="app">
		<main>
			{@render children()}
		</main>
	</div>
</ThemeProvider>

<style>
	.logo {
		width: 3.25rem;
		height: 3.25rem;
	}
</style>