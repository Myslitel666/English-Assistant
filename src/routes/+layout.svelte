<script>
  import "../app.css";
  import { ThemeProvider, Header, ColorThemeSwitch } from "svelte-elegant";
  import { themeMode } from "svelte-elegant/stores/themeStore";
  import { themeStore } from "svelte-elegant/stores/themeStore";

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  let { children } = $props();
</script>

<Header height="2.75rem">
  <button style:gap="0.5rem">
    <img
      src={$themeMode === "light" ? "/light-mega2.png" : "/dark-mega2.png"}
      alt="logo"
      class="logo"
    />
    <p style:font-size="26px">
      <span
        style:margin-left="3.25rem"
        style:color={theme?.palette.primary}
        style:transition="all 0.3s"
      >
        English Assistant
      </span>
    </p>
  </button>
  <div style:margin-left="auto" style:margin-right="1.25rem">
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
    position: absolute;
    left: 0;
    margin-left: 0.25rem;
    width: 3.25rem;
    height: 3.25rem;
    transition: transform 0.3s;
  }

  .logo:hover {
    transform: scaleX(1.35) scaleY(1.35);
  }
</style>
