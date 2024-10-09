<template>
  <span class='typewriter'>{{typewriter}}</span>
</template>

<script>
export default {
  name: 'TypeWriter',

  data () {
    return {
      typewriter: '',
      i: 0,
      j: 0,
      timer: 0,
      strings: ['英专毕业', '转码小白'],
      deleting: false
    }
  },

  mounted () {
    this.typing()
  },

  methods: {
    typing () {
      const currentStr = this.strings[this.j];
      if (!this.deleting && this.i <= currentStr.length) {
        this.typewriter = currentStr.slice(0, this.i++) + '_'
        this.timer = setTimeout(() => {
          this.typing()
        }, 150)
      } else if (this.deleting && this.i > 0) {
        this.typewriter = currentStr.slice(0, --this.i) + '_'
        this.timer = setTimeout(() => {
          this.typing()
        }, 100)
      } else if (!this.deleting && this.i > currentStr.length) {
        this.deleting = true
        this.timer = setTimeout(() => {
          this.typing()
        }, 1500)
      } else if (this.deleting && this.i === 0) {
        this.deleting = false
        this.j = (this.j + 1) % this.strings.length; // Move to the next string
        this.timer = setTimeout(() => {
          this.typing()
        }, 500)
      }
    }
  }
}
</script>
