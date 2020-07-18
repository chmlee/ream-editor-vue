<template>
  <div>
    {{ getPDF }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getPDF'
    ])
  }
}

</script>
