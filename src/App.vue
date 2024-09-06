<template>
  <div>
    <!-- Top navigation -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/network-graph">network graph</router-link>
      <router-link to="/counter">Counter</router-link>
    </nav>

    <!-- Main content -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped>
/* Optional styles for navigation links */
nav {
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #f4f4f4;
}

router-link {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

router-link:hover {
  color: #007bff;
}
</style>
