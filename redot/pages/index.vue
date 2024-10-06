<script setup>
import { computed, ref } from "vue";

const { data: posts } = await useAsyncData("recent-posts", () =>
  queryContent("/blog").find()
);
useContentHead(posts.value);

const recentPosts = computed(() => {
  return posts.value
    .filter((post) => post.type === "post" && post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
});
</script>
<template>
  <div>
    <section
      class="hero h-screen flex flex-col justify-center items-center relative"
    >
      <div id="redot-landing-core" class="text-center">
        <img
          src="~/assets/images/logo_white.svg"
          alt="Logo"
          class="mb-6 mx-auto"
          style="user-select: none"
          draggable="false"
        />
        <h1 class="font-bold">
          Open-source game engin<br />
          for everyone.
        </h1>
        <p class="mt-4 mb-8">No strings attached.</p>
        <v-btn large color="#FE3F02" append-icon="mdi-arrow-right">
          Download
        </v-btn>
      </div>
    </section>

    <section>
      <v-row>
        <v-col><h2 class="text-4xl mb-12">Recent News</h2></v-col>
        <v-col class="justify-end text-right">
          <v-btn color="#FE3F02" append-icon="mdi-arrow-right">More news</v-btn>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col
            v-for="post in recentPosts"
            :key="post._id"
            cols="12"
            md="3"
            class="mb-4"
          >
            <v-card
              class="bg-black rounded-lg overflow-hidden border border-gray-400"
            >
              <v-img :src="post.image" aspect-ratio="16/9"></v-img>
              <v-card-title class="text-white">{{ post.title }}</v-card-title>
              <v-card-text>{{ post.description }}</v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  base-color="white"
                  size="small"
                  variant="outlined"
                  :to="post._path"
                >
                  Read post
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-row>
        <v-col><h2 class="text-4xl mb-12">ReDOT Features</h2></v-col>
        <v-col class="justify-end text-right">
          <v-btn color="#FE3F02" append-icon="mdi-arrow-right">
            More Feature
          </v-btn>
        </v-col>
      </v-row>
      <v-container>
        <v-row justify="center">
          <v-col class="text-center">
            <div class="mb-6">
              <img
                src="~/assets/images/scene-driven_design.png"
                alt="Feature Image"
                class="mx-auto"
              />
            </div>
          </v-col>
          <v-col class="d-flex flex-column justify-center">
            <h3 class="text-2xl mb-2 feature-title">Scene-driven design</h3>
            <p class="feature-content">
              Use building blocks called nodes to create more complex and
              reusable scenes. Add scripts to your scenes and customize built-in
              behavior to implement your unique game mechanics. Rely on
              composition and node hierarchy to make game logic clear at a
              glance.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <div class="mb-6">
              <img
                src="~/assets/images/2d_3d.png"
                alt="Feature Image"
                class="mx-auto"
              />
            </div>
          </v-col>
          <v-col class="d-flex flex-column justify-center">
            <h3 class="text-2xl mb-2 feature-title">
              Dedicated 2D and 3D engines
            </h3>
            <p class="feature-content">
              Make crisp and performant 2D games with Redot’s dedicated
              2Drendering engine with real 2D pixel coordinates and 2D nodes.
              Redot's 3D nodes give you everything you need to build,
              animate,and render your 3D worlds and characters.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <div class="mb-6">
              <img
                src="~/assets/images/cross_platform.png"
                alt="Feature Image"
                class="mx-auto"
              />
            </div>
          </v-col>
          <v-col class="d-flex flex-column justify-center">
            <h3 class="text-2xl mb-2 feature-title">Cross platform</h3>
            <p class="feature-content">
              Develop on a wide range of supported platforms. Deploy your game
              on desktop, mobile, and the web in seconds.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-16 get-involved">
      <v-row>
        <v-col><h2 class="text-4xl mb-12">Get Involved</h2></v-col>
        <v-col class="justify-end text-right">
          <v-btn color="#FE3F02" append-icon="mdi-arrow-right">
            More Communities
          </v-btn>
        </v-col>
      </v-row>
      <v-container>
        <v-row justify="center">
          <v-col class="text-center">
            <img
              src="~/assets/images/discord_logo.png"
              alt="Discord Image"
              class="mx-auto"
            />
            <h3 class="mt-4">Discord Server</h3>
            <p class="mt-2 mb-4">
              A space to socialize with other community members.
            </p>
            <v-btn
              size="small"
              text
              color="black"
              append-icon="mdi-arrow-right"
            >
              Join
            </v-btn>
          </v-col>
          <v-col class="text-center">
            <img
              src="~/assets/images/forum_logo.png"
              alt="Forum Image"
              class="mx-auto"
            />
            <h3 class="mt-4">Forum</h3>
            <p class="mt-2 mb-4">
              A place for the Redot community to meet, ask questions, share
              their work, and provide help to other users.
            </p>
            <v-btn
              size="small"
              text
              color="black"
              append-icon="mdi-arrow-right"
            >
              Join
            </v-btn>
          </v-col>
          <v-col class="text-center">
            <img
              src="~/assets/images/x_logo.png"
              alt="X Image"
              class="mx-auto"
            />
            <h3 class="mt-4">X/Twitter Feed</h3>
            <p class="mt-2 mb-4">Get official development news.</p>
            <v-btn
              size="small"
              text
              color="black"
              append-icon="mdi-arrow-right"
            >
              Follow
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="py-16 improve-redot">
      <h2 class="text-4xl mb-12">Improve REDOT</h2>
      <v-container style="max-width: 420px">
        <v-row justify="center">
          <v-col class="text-center">
            <img
              src="~/assets/images/heart.png"
              alt="Discord Image"
              class="mx-auto"
            />
            <h3 class="mt-4">You can help us in a lot of ways!</h3>
            <p class="mt-2 mb-4">
              Whether you are a developer or not, you can speed up the
              development by contributing to the codebase, reporting bugs,
              keeping the documentation up to date and donating.
            </p>
            <v-btn text color="#FE3F02" append-icon="mdi-arrow-right">
              Learn more
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
section {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
section h2 {
  font-family: Inter;
  font-size: 36px;
  font-weight: 900;
  line-height: 43.57px;
  text-align: left;
  text-decoration: red underline;
}

section p {
  font-family: Inter;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 16.94px !important;
  color: #ffffff99;
}

.get-involved img {
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
}

.get-involved h3,
.improve-redot h3 {
  font-family: Inter;
  font-size: 24px !important;
  font-weight: 900 !important;
  line-height: 29.05px !important;
  text-align: center;
}

#redot-landing-core {
  width: Fixed (400px) px;
  height: Hug (372px) px;
  padding: 40px;
  gap: 20px;
  border-radius: 16px;
  border: 1px;
  z-index: 1;
  background-color: #00000099;
  border: 1px solid #ffffff1a;
  backdrop-filter: blur(60px);
}

#redot-landing-core h1 {
  font-family: Inter;
  font-size: 24px !important;
  font-weight: 900 !important;
  line-height: 29.05px !important;
}

.feature-title {
  font-family: Inter;
  font-size: 36px !important;
  font-weight: 900 !important;
  line-height: 38.73px !important;
  text-align: left;
}

.feature-content {
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 19.36px !important;
  text-align: left;
  color: #ffffff99;
}

.hero {
  position: relative;
}

.bg-dark {
  background-color: #222;
}
</style>
