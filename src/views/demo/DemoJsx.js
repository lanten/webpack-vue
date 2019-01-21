export default {

  render(h) {
    return (
      <div class="okk">
        <p>jsx - ok</p>
        <button onClick={this.$router.back}>back</button>

        <hr />
        <p>{this.$store.getters.getLocalize('text.jsxDemoPage')}</p>

        <button onClick={() => this.$store.commit('changeLanguage', 'en')}>en</button>
        &nbsp;
        <button onClick={() => this.$store.commit('changeLanguage', 'zh-CN')}>zh-CN</button>
      </div>
    )
  }
}