<template>
    <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
            <v-btn color="white" text rounded class="my-2">
            Home
            </v-btn>
            <v-dialog v-model="dialog" width="1200">
                <template v-slot:activator="{ on }">
                    <v-btn color="white" text rounded class="my-2" v-on="on">
                        About Us
                    </v-btn>
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
            <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>IMITRACOV</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
        dialog: false,
    }),
  }
</script>