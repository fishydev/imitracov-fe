<template>
    <div>
        <v-toolbar dense max-height="50" color="blue darken-3">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">IMITRACOV</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="overlayLogin = !overlayLogin">
                <v-icon>mdi-login</v-icon>
                Admin
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item href="/">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item href="/about">
                        <v-list-item-icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- overlay login -->
        <v-overlay :value="overlayLogin">
            <v-card class="mx-5" outlined light>
                <v-toolbar dense flat>
                    <v-toolbar-title>Log in</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn text @click="overlayLogin = !overlayLogin" :ripple="false">
                        <v-icon right>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class="pb-0">
                    <v-form
                        id="login_form"
                        ref="form_login"
                        v-model="valid"
                        lazy-validation>
                        <v-text-field
                            label="Email"></v-text-field>
                        <v-text-field
                            label="Password"
                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show_password ? 'text' : 'password'"
                            @click:append="show_password = !show_password"></v-text-field>
                        <v-btn
                            block
                            depressed
                            color="success"
                            class="my-3"
                            type="submit"
                            form="login_form"
                            href="/admin">Login</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-overlay>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      overlayLogin: false,
    }),
  }
</script>