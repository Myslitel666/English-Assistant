<script>
  import "../app.css";
  import {
    ThemeProvider,
    Header,
    ColorThemeSwitch,
    ScrollbarContainer,
  } from "svelte-elegant";
  import { themeMode } from "svelte-elegant/stores/themeStore";
  import { themeStore } from "svelte-elegant/stores/themeStore";

  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы
  });

  let { children } = $props();
</script>

<ThemeProvider>
  <Header height="53px">
    <button style:gap="0.5rem">
      <img
        src={$themeMode === "light" ? "/light-mega2.png" : "/dark-mega2.png"}
        alt="logo"
        class="logo"
      />
      <p style:font-size="26px">
        <span
          style:margin-left="3.25rem"
          style:color={$themeStore.palette.primary}
          style:transition="all 0.3s"
        >
          English Assistant
        </span>
      </p>
    </button>
    <div style:margin-left="auto" style:margin-right="2px">
      <ColorThemeSwitch />
    </div>
  </Header>
  <ScrollbarContainer>
    <div class="app">
      <main>
        {@render children()}
      </main>
    </div>
  </ScrollbarContainer>
</ThemeProvider>

<style>
  .logo {
    position: absolute;
    left: 0;
    margin-left: 0.25rem;
    width: 48px;
    height: 48px;
    transition: transform 0.3s;
  }

  .logo:hover {
    transform: scaleX(1.35) scaleY(1.35);
  }
</style>
