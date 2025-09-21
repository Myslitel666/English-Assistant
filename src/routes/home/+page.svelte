<script>
  import { DataGrid, AutoComplete } from "svelte-elegant";
  import { onMount } from "svelte";
  import * as fetch from "./fetch";
  import { themeStore } from "svelte-elegant/stores/ElementIdStore";

  let subjects;
  let specialWords = [{ value: "", translate: "", example_use: "" }];
  let subjectWord = "";

  $: if (subjectWord) {
    getSpecialWords();
  }

  async function getSpecialWords() {
    specialWords = await fetch.getSpecialWords(subjectWord);
  }

  onMount(async () => {
    subjects = await fetch.getSubjects();
    subjectWord = subjects.includes("React") ? "React" : subjects[0];
    specialWords = await fetch.getSpecialWords(subjectWord);
  });

  export let columns = [
    { field: "value", header: "Special Word", width: "200px" },
    {
      field: "translate",
      header: "Translate",
      width: "220px",
    },
    {
      field: "example_use",
      header: "Example Of Use",
      width: "400px",
    },
  ];
</script>

<div class="page">
  <p>
    The <span style:font-weight="600">Dictionary</span> of special words
    designed to study <span style:font-weight="600">Web-Development</span> and technical
    documentation.
  </p>
  <div class="subject">
    <p>Choose Subject:</p>
    <AutoComplete bind:value={subjectWord} options={subjects} label="Subject" />
  </div>
  <div class="subject">
    <DataGrid
      width="100%"
      maxWidth="838px"
      maxHeight="514px"
      {columns}
      rows={specialWords}
    />
  </div>
  <div class="subject">
    <div style:display="flex">
      <span>Quantity of words:</span>
      <span
        style:margin-left="5px"
        style:font-weight="600"
        style:color={$themeStore.palette.primary}
      >
        {specialWords?.length}
      </span>
    </div>
  </div>
</div>

<style>
  .page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    gap: 10px;
    box-sizing: border-box;
  }

  .subject {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
</style>
