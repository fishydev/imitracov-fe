<template>
    <div class="home">
        <NavbarUser />
        <v-card class="mx-auto pa-8 ma-5" max-width="1200" color="blue darken-3">
            <p class="display-2 white--text text-center" >
                Data Pemantauan Kasus Covid-19 WNA
            </p>
        </v-card>
        <v-card class="mx-auto ma-3" max-width="1200">
            <chartjs-doughnut 
                v-bind:labels="labels"
                v-bind:datasets="datasets"
                v-bind:option="option"
            ></chartjs-doughnut>
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
                                <v-list-item-subtitle>
                                    <v-text-field
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersODP"
                                        :items="dataODP"
                                        :search="searchODP"
                                    ></v-data-table>
                                </v-list-item-subtitle>
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
                                <v-list-item-subtitle>
                                    <v-text-field
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersPDP"
                                        :items="dataPDP"
                                        :search="searchPDP"
                                    ></v-data-table>
                                </v-list-item-subtitle>
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
                                <v-list-item-subtitle>
                                    <v-text-field
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headerPN"
                                        :items="dataPN"
                                        :search="searchPN"
                                    ></v-data-table>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        
    </div>
</template>

<script>
const axios = require('axios')
import NavbarUser from '../components/NavbarUser.vue'

export default {
    data() {
        return {
            searchODP: '',
            headersODP: [
                {
                    text: 'Negara Asal',
                    align: 'start',
                    sortable: false,
                    value: 'negara',
                },
                { text: 'Jumlah', value: 'jumlah'},
            ],
            dataODP : [],
            searchPDP: '',
            headersPDP: [
                {
                    text: 'Negara Asal',
                    align: 'start',
                    sortable: false,
                    value: 'negara',
                },
                { text: 'Jumlah', value: 'jumlah'},
            ],
            dataPDP : [],
            searchPN: '',
            headerPN: [
                {
                    text: 'Negara Asal',
                    align: 'start',
                    sortable: false,
                    value: 'negara',
                },
                { text: 'Positif', value: 'positif'},
                { text: 'Negatif', value: 'negatif'},
            ],
            dataPN : [],
            labels: ["ODP", "PDP", "Negatif", "Positif"],
            datasets: [
            {
                data: [20, 30, 50, 40],
                backgroundColor: ["Yellow", "Orange", "Red", "Green"]
            }
            ],
            option: {
                title: {
                    display: true,
                    position: "bottom",
                    text: "Data Kasus Covid-19 (Imported Case)"
                }
            },
        };
    },

    components: {
        NavbarUser,
    },

    beforeMount() {
        axios.get('https://imitracov-be.herokuapp.com/api/patient').then((res) => {
            var pasien = res.data

            var countODP = pasien.filter((pasienODP) => { return pasienODP.status == "ODP"})
            var countPDP = pasien.filter((pasienPDP) => { return pasienPDP.status == "PDP"})
            var countPos = pasien.filter((pasienPos) => { return pasienPos.status == "Positif"})
            var countNeg = pasien.filter((pasienPos) => { return pasienPos.status == "Negatif"})
            
            var occurencesODP = countODP.reduce(function (r, row) {
                r[row.asalBerangkat] = ++r[row.asalBerangkat] || 1
                return r
            }, {})

            this.dataODP = Object.keys(occurencesODP).map(function (negara) {
                return { negara: negara, jumlah: occurencesODP[negara] }
            })

            var occurencesPDP = countPDP.reduce(function (r, row) {
                r[row.asalBerangkat] = ++r[row.asalBerangkat] || 1
                return r
            }, {})

            this.dataPDP = Object.keys(occurencesPDP).map(function (negara) {
                return { negara: negara, jumlah: occurencesPDP[negara] }
            })

            var occurencesPos = countPos.reduce(function (r, row) {
                r[row.asalBerangkat] = ++r[row.asalBerangkat] || 1
                return r
            }, {})

            var occurencesNeg = countNeg.reduce(function (r, row) {
                r[row.asalBerangkat] = ++r[row.asalBerangkat] || 1
                return r
            }, {})

            this.dataPN = Object.keys(occurencesPos, occurencesNeg).map(function (negara) {
                return { negara: negara, positif: occurencesPos[negara], negatif: occurencesNeg[negara]}
            })
        })
    }
}
</script>

<style scoped>

</style>



