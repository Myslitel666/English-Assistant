<script>
  import { DataGrid, AutoComplete } from "svelte-elegant";
  import { onMount } from "svelte";
  import * as fetch from "./fetch";

  let subjects;
  let specialWords;
  let subjectWord = "";

  $: if (subjectWord) {
    getSpecialWords();
  }

  async function getSpecialWords() {
    specialWords = await fetch.getSpecialWords(subjectWord);
    console.log(specialWords);
  }

  onMount(async () => {
    subjects = await fetch.getSubjects();
    subjectWord = subjects.includes("React") ? "React" : subjects[0];
    specialWords = await fetch.getSpecialWords(subjectWord);
  });
</script>

<div class="page">
  <p style:margin-top="10px" style:margin-bottom="10px">
    The <span style:font-weight="600">Dictionary</span> of special words
    designed to study <span style:font-weight="600">Web-Development</span> and technical
    documentation.
  </p>
  <div class="subject">
    <p>Choose Subject:</p>
    <AutoComplete bind:value={subjectWord} options={subjects} label="Subject" />
  </div>
  <DataGrid />
</div>

<style>
  .page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  .subject {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
  }
</style>
