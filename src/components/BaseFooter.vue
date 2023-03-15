<template>
  <footer>
    <div class="footer-wrapper">
      <span>EDMood</span> - embedded from
      <a
        href="https://developers.soundcloud.com/docs/api/html5-widget"
        target="blank"
        >Soundcloud</a
      >
      with &#10084;
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
};
</script>

<style scoped>
footer {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-family: "Nunito Sans";
}

.footer-wrapper span {
  color: var(--text-tertiary);
}

.footer-wrapper a {
  text-decoration: none;
  color: var(--text-tertiary);
}
</style>
