<template>
    <div class="home">
        <v-card class="mx-auto pa-8 ma-5" max-width="1200" color="blue darken-3">
            <p class="display-2 white--text text-center" >
                Data Pemantauan Kasus Covid-19 WNA
            </p>
        </v-card>
        <v-card class="mx-auto" max-width="1200">
            <v-row class="pa-3">
                <v-col cols="12" md="4" class="">
                    <v-card class="mx-auto">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text-center">
                                    ODP
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-center">
                                    ODP (Orang Dalam Pemantauan) adalah orang yang pernah melakukan kontak dengan pasien Covid-19
                                </v-list-item-subtitle>
                                <v-divider></v-divider>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" class="">
                    <v-card class="mx-auto">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text-center">
                                    PDP
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-center">
                                    PDP (Pasien Dalam Pengawasan) adalah orang yang penyakit gejala Covid-19
                                </v-list-item-subtitle>
                                <v-divider></v-divider>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" class="">
                    <v-card class="mx-auto">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text-center">
                                    Negatif/ Positif
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-center">
                                    Hasil pemeriksaan orang yang berstatus siaga
                                </v-list-item-subtitle>
                                <v-divider></v-divider>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>


