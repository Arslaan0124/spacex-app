<template>
  <div>
    <header class="header">
      <NuxtLink to="/">
        <h1 class="logo">SpaceX Explorer</h1>
      </NuxtLink>
      <nav>
        <NuxtLink to="/">
          <Button variant="ghost">Home</Button>
        </NuxtLink>
        <NuxtLink to="/saved">
          <Button variant="ghost">Saved Launches</Button>
        </NuxtLink>
      </nav>
    </header>

    <main class="content-container">
      <slot />
    </main>

    <footer class="footer">
      <p>&copy; 2024 SpaceX Explorer. Made by Arslan Tariq</p>
    </footer>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
}

.logo {
  font-size: 1.5rem;
}

nav a {
  margin-left: 15px;
}

.content-container {
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1400px;
}

.footer {
  padding: 10px 20px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  color: #333;
  text-align: center;
}

main {
  padding: 20px;
}
</style>
