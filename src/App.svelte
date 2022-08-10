<script lang="ts">
    import './app.css'
    import { onMount } from 'svelte'

    onMount(async () => {
        const video = document.querySelector(
            '#videoElement'
        ) as HTMLVideoElement

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream
                })
                .catch(function (err0r) {
                    console.log('Something went wrong!')
                })
        }
    })
</script>

<main class="mt-16 ml-4">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <video autoplay={true} id="videoElement" class="w-44 h-44 bg-slate-400" />
</main>

<style>
</style>
