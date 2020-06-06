<template>
    <div class="home">
        <NavbarAdmin />
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
                <v-col cols="12">
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
                                        :headers="headerODP"
                                        :items="dataODP"
                                        :search="searchODP"
                                    ></v-data-table>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12">
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
                                        :headers="headerPDP"
                                        :items="dataPDP"
                                        :search="searchPDP"
                                    ></v-data-table>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="mx-auto">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text-center">
                                    Positif
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-center">
                                    Hasil pemeriksaan orang yang berstatus siaga menunjukan 'Positif' terpapar COVID-19
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
                                        :headers="headerPos"
                                        :items="dataPos"
                                        :search="searchPos"
                                    ></v-data-table>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="mx-auto">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1 text-center">
                                    Negatif
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-center">
                                    Hasil pemeriksaan orang yang berstatus siaga menunjukan 'Negatif' terpapar COVID-19
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
                                        :headers="headerNeg"
                                        :items="dataNeg"
                                        :search="searchNeg"
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
import NavbarAdmin from '../components/NavbarAdmin.vue'

export default {
    data: () => ({
        pasien: [],
        dataODP: [],
        searchODP: '',
        headerODP: [
            {
                text: 'NIK/ NIC',
                align: 'start',
                sortable: false,
                value: 'nik',
            },
            { text: 'Nama', value: 'nama'},
            { text: 'TglLahir', value: 'lahir'},
            { text: 'Negara Asal', value: 'asalBerangkat'},
            { text: 'TglDatang', value: 'tglPulang'},
            { text: 'Provinsi', value: 'provinsi'},
            { text: 'Kecamatan', value: 'kecamatan'},
            { text: 'Kota', value: 'kota'},
            { text: 'Alamat', value: 'alamat'},
            { text: 'Status', value: 'status'}
        ],
        dataODP : [],
        searchPDP: '',
        headerPDP: [
            {
                text: 'NIK/ NIC',
                align: 'start',
                sortable: false,
                value: 'nik',
            },
            { text: 'Nama', value: 'nama'},
            { text: 'TglLahir', value: 'lahir'},
            { text: 'Negara Asal', value: 'asalBerangkat'},
            { text: 'TglDatang', value: 'tglPulang'},
            { text: 'Provinsi', value: 'provinsi'},
            { text: 'Kecamatan', value: 'kecamatan'},
            { text: 'Kota', value: 'kota'},
            { text: 'Alamat', value: 'alamat'},
            { text: 'Status', value: 'status'}
        ],
        dataPDP : [],
        searchPos: '',
        headerPos: [
            {
                text: 'NIK/ NIC',
                align: 'start',
                sortable: false,
                value: 'nik',
            },
            { text: 'Nama', value: 'nama'},
            { text: 'TglLahir', value: 'lahir'},
            { text: 'Negara Asal', value: 'asalBerangkat'},
            { text: 'TglDatang', value: 'tglPulang'},
            { text: 'Provinsi', value: 'provinsi'},
            { text: 'Kecamatan', value: 'kecamatan'},
            { text: 'Kota', value: 'kota'},
            { text: 'Alamat', value: 'alamat'},
            { text: 'Status', value: 'status'}
        ],
        dataPos : [],
        searchNeg: '',
        headerNeg: [
            {
                text: 'NIK/ NIC',
                align: 'start',
                sortable: false,
                value: 'nik',
            },
            { text: 'Nama', value: 'nama'},
            { text: 'TglLahir', value: 'lahir'},
            { text: 'Negara Asal', value: 'asalBerangkat'},
            { text: 'TglDatang', value: 'tglPulang'},
            { text: 'Provinsi', value: 'provinsi'},
            { text: 'Kecamatan', value: 'kecamatan'},
            { text: 'Kota', value: 'kota'},
            { text: 'Alamat', value: 'alamat'},
            { text: 'Status', value: 'status'}
        ],
        dataNeg : [],
        labels: ["ODP", "PDP", "Negatif", "Positif"],
        datasets: [{
            
        }],
        option: {
            title: {
                display: true,
                position: "bottom",
                text: "Data Kasus Covid-19 (Imported Case)"
            }
        },
    }),

    components: {
        NavbarAdmin,
    },

    beforeMount() {
        axios.get('https://imitracov-be.herokuapp.com/api/patient').then((res) => {
            var pasien = res.data

            this.dataODP = pasien.filter((pasienODP) => { return pasienODP.status == "ODP"})
            this.dataPDP = pasien.filter((pasienPDP) => { return pasienPDP.status == "PDP"})
            this.dataPos = pasien.filter((pasienPos) => { return pasienPos.status == "Positif"})
            this.dataNeg = pasien.filter((pasienNeg) => { return pasienNeg.status == "Negatif"})
        })
    }
}
</script>

<style scoped>

</style>



