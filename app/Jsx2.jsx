import scss from './sassTest.scss'

export default {

  props: {
    testProps: {
      type: String,
      default: 'ok'
    }
  },

  data() {
    return {
      outValue: 0
    }
  },

  mounted() {
    console.log(process.env, scss, this)
  },

  render(h) {
    return (
      <div>
        <ul>
          <li>props: {this.testProps}</li>
        </ul>
        <input type="text" onkeyup={this.test} ref="$el_input" /> <button onclick={this.test}>ok??</button>
        <br /><br />
        <div class="test">{this.outValue}</div>
      </div>
    )
  },

  methods: {
    test() {
      const { $el_input } = this.$refs
      const reg = /^(\w|-|\.)+@\w+(\w|\.)+.\w+$/
      this.outValue = reg.test($el_input.value) + ''
    }
  }
}