<template>
  <div>
    <pre>
{{ mdFile.toCSV() }}
    </pre>
  </div>
</template>

<script>export default {
  props: [
    'mdFile'
  ]
}
</script>

<style scoped>
pre {
  counter-reset: line;
}
</style>
