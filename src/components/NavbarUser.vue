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
                    <v-dialog v-model="dialog" width="1200">
                        <template v-slot:activator="{ on }">
                            <v-list-item v-on="on">
                                <v-list-item-icon>
                                    <v-icon>mdi-information-outline</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>About</v-list-item-title>
                            </v-list-item>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                                About Website
                            </v-card-title>
                            <v-card-text>
                                <v-img class="mt-3 mb-3" src=https://backpanel.kemlu.go.id/PublishingImages/Cape%20Town%202020/coronavirus.jpg></v-img>
                                <p class="text-justify subtitle-1">IMITRACOV merupakan sebuah website untuk menampilkan data terkait orang yang baru saja masuk ke dalam Indonesia. Website ini dibuat untuk memantau keluar masuknya orang ke dalam Indonesia ditengah masa pandemi coronavirus guna mencegah persebaran coronavirus yang berasal dari luar Indonesia.</p>
                                <p class="text-justify subtitle-1">Untuk data akan ditampilkan dalam bentuk tabel yang akan dibedakan berdasarkan klasifikasi yang kita pake untuk orang-orang dengan suspect terkena coronavirus. Kalasifikasi terdiri atas ODP (Orang dalam Pemantauan), PDP (Pasien dalam Penagawsan), serta suspect yang dinyatakan positif dan negatif terpapar coronavirus.</p>
                                <p class="text-justify subtitle-1">Harapannya dengan adanya website ini dapat membuat kita sebagai individu yang tinggal di negara ini bisa lebih waspada lagi akan bahayanya virus ini serta persebarannya yang masif, tidak hanya dari dalam negeri ini namun dari luar negeri juga. Selain itu, dengan adanya website ini juga diharapkan angka pertambahan orang yang terpapar coronavirus terus turun sehingga kita dapat beraktifitas seperti sedia kala.</p>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-action>
                                <v-spacer></v-spacer>
                                <v-btn color="red" text @click="dialog = false">
                                    CLOSE
                                </v-btn>
                            </v-card-action>
                        </v-card>
                    </v-dialog>
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
        <!-- overlay about -->

    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      overlayLogin: false,
      dialog: false,
    }),
  }
</script>