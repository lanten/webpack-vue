import Vue from 'vue'
import App from './App.vue'
import Jsx2 from './Jsx2.jsx'

// console.log(Vue.component)

// @Vue.component()
// class JsxTest extends Vue {

//   // constructor(props) {
//   //   super(...arguments)

//   // }

//   render(h) {
//     return <div>123</div>
//   }
// }

// console.log(new JsxTest())

// export default JsxTest
export default {

  data() {
    return {
      test: 'this is bad jsx'
    }
  },

  props: {
    testProps: {
      type: String,
      default() {
        return 'okkkkk'
      }
    }
  },

  mounted() {
    console.log(hahaha)
  },

  render() {
    return (
      <div id="123133">
        {JSON.stringify({ text: this.test })}
        <App />
        <Jsx2 testProps="1233333jjjk" ref={ref => this.refJsx = ref} />
      </div>
    )
  }
}