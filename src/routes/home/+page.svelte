<script>
  import { DataGrid, AutoComplete } from "svelte-elegant";
</script>

<div class="page">
  <p style:margin-top="10px" style:margin-bottom="10px">
    The <span style:font-weight="600">Dictionary</span> of special words
    designed to study <span style:font-weight="600">Web-Development</span> and technical
    documentation.
  </p>
  <div class="subject">
    <p>Choose Subject:</p>
    <AutoComplete width="200px" label="Subject" />
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
