<template>
  <header>
    <div class="logo-text">
      <router-link to="/">
        <h1>Financ<span>easy</span></h1>
        <h2>Personal <span>finance</span> made <span>easy</span>!</h2>
      </router-link>
    </div>
    <template v-if="authIsReady">
      <nav v-if="user">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/entry">Entry</router-link></li>
          <li>
            <Icon
              class="cursor-pointer"
              @click="openSettings = !openSettings"
              iconName="circleSolid"
              :color="openSettings ? '#71b280' : 'white'"
            />
          </li>
          <li>
            <nav v-if="openSettings" class="navbar-dropdown">
              <ul>
                <li class="cursor-pointer">Settings</li>
                <li class="cursor-pointer" @click="handleClick">Logout</li>
              </ul>
            </nav>
          </li>
        </ul>
      </nav>
      <nav v-else>
        <router-link to="/login" class="btn-green">Login</router-link> |
        <router-link to="/register" class="btn-green">Register</router-link>
      </nav>
    </template>
  </header>
</template>

<script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { mapGetters, mapActions } from "@/store/helpers";

  export default {
    setup() {
      const openSettings = ref(false);
      const router = useRouter();
      const { user, authIsReady } = mapGetters("auth");
      const { logout } = mapActions("auth");

      const handleClick = async () => {
        await logout();
        router.push("/login");
      };

      return {
        handleClick,
        openSettings,
        user,
        authIsReady,
      };
    },
  };
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    // background: $dark-green;
    height: 70px;

    .logo-text a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-family: $font-title-alt;
      color: $white;
      line-height: 1.5rem;

      span {
        color: $light-green;
      }
    }

    h2 {
      font-size: 0.75rem;
      font-weight: 500;
      // letter-spacing: 0.05rem;
      color: $white;

      span {
        font-family: $font-title-alt;
        font-size: 0.85rem;
        color: $light-green;
      }
    }

    div a {
      text-decoration: none;
    }

    nav ul {
      display: flex;
      align-items: center;
      position: relative;

      li {
        list-style: none;

        &:not(:first-child) {
          display: flex;
          align-items: center;

          &::before {
            content: "|";
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }
        }
        &:last-child {
          &::before {
            content: "";
            margin: 0;
          }
        }
      }

      & a {
        font-weight: bold;
        color: $white;
        text-decoration: none;

        &.router-link-exact-active {
          color: $light-green;
        }
      }
    }

    .navbar-dropdown {
      position: absolute;
      background: $light-green;
      top: 40px;
      right: -5px;
      width: 200px;
      // height: 100px;
      border-radius: 10px;

      &::before {
        content: "";
        position: inherit;
        top: -7.5px;
        right: 12.5px;
        width: 0;
        height: 0;
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;

        border-bottom: 7.5px solid $light-green;
      }

      ul {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      li {
        width: 100%;
        padding: 0.5rem;
        color: $white;
        background: rgba($dark-green, 0.3);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        &:hover {
          background: rgba($dark-green, 1);
          font-weight: 600;
        }
      }
    }
  }
</style>
