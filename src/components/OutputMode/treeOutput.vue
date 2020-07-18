<template>
  <div>
    <pre>
{{ mdFile.toTree() }}
    </pre>
  </div>
</template>

<script>
export default {
  props: [
    'mdFile'
  ]
}
</script>
