export default {
  name: 'router-link',
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String
    }
  },
  methods: {
    clickHandler() {
      this.$parent.$router.push(this.to)
    }
  },
  render(h) {
    let tag = this.tag || 'a'
    return h(tag, {
      on: { click: this.clickHandler}
    }, this.$slots.default)
  }
}