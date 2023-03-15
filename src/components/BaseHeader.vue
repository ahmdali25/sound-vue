<template>
  <nav>
    <div class="nav">
      <div>
        <h1 class="nav-title">EDMood</h1>
      </div>
      <div>
        <ul class="nav-list">
          <li>
            <router-link class="link" to="/melodic-dubstep"
              >Melodic Dubstep</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/future-bass"
              >Future Bass</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/progressive-house"
              >Progressive House</router-link
            >
          </li>
          <li><router-link class="link" to="/dnb">DnB</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-columns: 150px 800px;
  align-items: center;
}

.nav-title {
  font-family: "Nunito Sans";
  font-size: 24px;
  color: var(--text-tertiary);
}

.nav-list {
  list-style: none;
  font-family: "Nunito Sans";
  font-size: 18px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-list li {
  cursor: pointer;
}

.nav-list .link {
  text-decoration: none;
  color: var(--text-primary);
}
</style>
