<script lang="ts">
    import './app.css'
    import { Router, Route } from 'svelte-navigator'
    import Home from './pages/home.svelte'
    import About from './pages/about.svelte'
</script>

<Router>
    <Route path="/">
        <Home />
    </Route>
    <Route path="about" component={About} />
</Router>
