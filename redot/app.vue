<template>
  <v-app class="bg-black text-white">
    <!-- AppBar -->
    <v-app-bar absolute :elevation="0" color="rgba(0, 0, 0, 0)">
      <v-spacer></v-spacer>
      <NuxtLink to="/">
        <img
          src="~/assets/images/TopBarLogo.svg"
          alt="Logo"
          style="max-width: 100%; user-select: none"
          draggable="false"
          class="mr-3"
        />
      </NuxtLink>
      <!-- Nav Links -->
      <v-btn text>Overview</v-btn>
      <v-btn text>Documentation</v-btn>
      <v-btn text>News</v-btn>
      <v-btn text>Assets</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="flat" color="black" append-icon="mdi-xml" class="ml-3">
        Contribute
      </v-btn>
      <v-btn variant="flat" color="black" append-icon="mdi-heart" class="ml-3">
        Donate
      </v-btn>
      <v-btn variant="flat" color="#FE3F02" class="ml-3">Download</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="pt-0">
      <div class="h-screen w-screen absolute">
        <img
          id="background-image"
          src="~/assets/images/first-background.png"
          alt="Background"
          class="inset-0 w-full h-full object-cover"
          style="user-select: none"
          draggable="false"
        />
        <div id="gradient-overlay"></div>
      </div>
      <NuxtPage class="z-10 relative" />
    </v-main>
    <v-divider></v-divider>
    <v-footer color="black" class="py-6">
      <v-container>
        <v-row>
          <v-col>
            <img
              src="~/assets/images/footer_logo.png"
              alt="Logo"
              style="max-width: 100%; user-select: none"
              draggable="false"
              class="mr-3"
            />
          </v-col>
          <v-col class="text-right">
            <a class="inline-block ml-2">
              <img src="~/assets/images/github_icon.svg" alt="icon" />
            </a>
            <a class="inline-block ml-2">
              <img src="~/assets/images/discord_icon.svg" alt="icon" />
            </a>
            <a class="inline-block ml-2">
              <img src="~/assets/images/x_icon.svg" alt="icon" />
            </a>
            <a class="inline-block ml-2">
              <img src="~/assets/images/reddit_icon.svg" alt="icon" />
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h3>Redot Engine</h3>
            <ul>
              <li><a href="#">Download</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Source Code</a></li>
            </ul>
          </v-col>
          <v-col>
            <h3>Project</h3>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Communities</a></li>
            </ul>
          </v-col>
          <v-col>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Assets</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </v-col>
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
        </v-row>
        <v-row>
          <v-col class="text-left">
            <p id="copyright" class="text-white">
              © 2024 ReDOT Engine. All Rights Reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup></script>

<style scoped>
footer .v-container {
  max-width: 1280px;
}

footer h3 {
  font-family: Inter;
  font-size: 24px !important;
  font-weight: 900 !important;
  line-height: 29.05px !important;
  text-align: left;
  margin-bottom: 12px;
}

footer li {
  margin: 6px 0;
}

footer li a {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: #ffffff99;
}

#background-image {
  z-index: 0;
}

#gradient-overlay::before,
#gradient-overlay::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}

#gradient-overlay::before {
  top: 0;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
}

#gradient-overlay::after {
  bottom: 0;
  height: 200px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
}

#copyright {
  font-family: Inter;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 16.94px !important;
  text-align: left;
  color: #ffffff99 !important;
}
</style>
