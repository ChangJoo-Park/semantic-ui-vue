<template lang="html">
  <docs-page>
    <h1 class="ui header">Divider</h1>
    <div class="ui segment">
      original divider document : https://semantic-ui.com/elements/divider.html
    </div>
    <div class="ui basic segment">
      <h4 class="ui header">Divider</h4>
      <p>A standard divider</p>
      <!-- Example Divider 1-->
      <div>
        <wireframe></wireframe>
        <ui-divider></ui-divider>
        <wireframe></wireframe>
      </div>
    </div>
    <div class="ui basic segment">
      <h4 class="ui header">Vertical Divider</h4>
      <p>A divider can segment content vertically</p>

      <!-- Example Vertical Divider 1-->
      <div class="ui three column very relaxed grid">
        <div class="column">
          <wireframe></wireframe>
          <wireframe></wireframe>
          <wireframe></wireframe>
        </div>
        <ui-divider vertical>AND</ui-divider>
        <div class="column">
          <wireframe></wireframe>
          <wireframe></wireframe>
          <wireframe></wireframe>
        </div>
        <ui-divider vertical>OR</ui-divider>
        <div class="column">
          <wireframe></wireframe>
          <wireframe></wireframe>
          <wireframe></wireframe>
        </div>
        <ui-icon user></ui-icon>
      </div>

      <!-- Example Vertical Divider 2-->
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username">
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password">
                <i class="lock icon"></i>
              </div>
            </div>
            <ui-button submit color="blue">Login</ui-button>
          </div>
        </div>
        <ui-divider vertical>Or</ui-divider>
        <div class="center aligned column">
          <ui-button labeled size="big" color="green" icon="signup">
            Sign Up
          </ui-button>
        </div>
      </div>
    </div>
    <div class="ui basic segment">
      <h4 class="ui header">Horizontal Divider</h4>
      <p>A divider can segment content horizontally</p>

      <!-- Example Horizontal Divider 1 -->
      <div class="ui center aligned basic segment">
        <div class="ui left icon action input">
          <i class="search icon"></i>
          <input type="text" placeholder="Order #">
          <ui-button type="submit" color="blue">Search</ui-button>
        </div>
        <ui-divider horizontal>
          OR
        </ui-divider>
        <ui-button labeled icon="add" color="teal">
          Create New Order
        </ui-button>
      </div>
      <!-- Example Horizontal Divider 2 -->
      <h4 class="ui horizontal divider header">
        <ui-icon></ui-icon>
        Description
      </h4>
      <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
      <h4 class="ui horizontal divider header">
        <i class="bar chart icon"></i>
        Specifications
      </h4>
      <table class="ui definition table">
        <tbody>
          <tr>
            <td class="two wide column">Size</td>
            <td>1" x 2"</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>6 ounces</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>Yellowish</td>
          </tr>
          <tr>
            <td>Odor</td>
            <td>Not Much Usually</td>
          </tr>
        </tbody>
      </table>
    </div>
  </docs-page>
</template>

<script>
export default {
  components: {
    'wireframe': {
      template: '<p><img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" class="ui wireframe image"></p>'
    }
  }
}
</script>

<style lang="css">
</style>
