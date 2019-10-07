<template>
  <div>
    <b-navbar toggleable="sm" type="dark bg-dark" variant="info">
      <b-navbar-brand to='/'>{{msg}}</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to='/realtime'>DATA</b-nav-item>
          <b-nav-item to="/graph">GRAPH</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
let WebTitle = 'API BME280'

export default {
  name: 'MainNavbar',
  data () {
    return {
      msg: WebTitle
    }
  },
}
</script>
