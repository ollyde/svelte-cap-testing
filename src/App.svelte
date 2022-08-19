<script lang="ts">
    import './app.css'
    import { Router, Route } from 'svelte-navigator'
    import Home from './pages/home.svelte'
    import About from './pages/about.svelte'
</script>

<div>
    <Router>
        <Route path="/">
            <Home />
        </Route>
        <Route path="about" component={About} />
    </Router>
</div>

<style>
    text-heading:focus {
        outline: none;
    }
</style>
