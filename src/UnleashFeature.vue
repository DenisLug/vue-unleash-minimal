<script>
export default {
  props: {
    name: {
      default: '',
      required: true,
      type: String
    }
  },

  computed: {
    enabled() {
      return this.$store.state.unleash ? this.$store.state.unleash.features[this.name] : false;
    }
  },

  render() {
    return this.enabled ? this.$slots.default : null;
  }
};
</script>
