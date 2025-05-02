<script>
  const { children } = $props()

  $effect.pre(() => {
    const key = 'SVELTEPRESS_DARK_MODE'
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 'on')
    }
  })
</script>

<!-- Leave this. Or you can add more content for your custom layout -->
{@render children?.()}
