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
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersODPAdmin"
                                        :items="dataODPAdmin"
                                        :search="searchODPAdmin"
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
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersPDPAdmin"
                                        :items="dataPDPAdmin"
                                        :search="searchPDPAdmin"
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
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersPosAdmin"
                                        :items="dataPosAdmin"
                                        :search="searchPosAdmin"
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
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    <v-data-table
                                        :headers="headersNegAdmin"
                                        :items="dataNegAdmin"
                                        :search="searchNegAdmin"
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
import NavbarAdmin from '../components/NavbarAdmin.vue'

export default {
    data() {
        return {
            searchODPAdmin: '',
            headersODPAdmin: [
                {
                    text: 'NIK/ NIC',
                    align: 'start',
                    sortable: false,
                    value: 'nikODP',
                },
                { text: 'Nama', value: 'namaODP'},
                { text: 'TglLahir', value: 'lahirODP'},
                { text: 'Negara Asal', value: 'asalODP'},
                { text: 'TglDatang', value: 'datangODP'},
                { text: 'Provinsi', value: 'provinsiODP'},
                { text: 'Kecamatan', value: 'kecamatanODP'},
                { text: 'Kota', value: 'kotaODP'},
                { text: 'Alamat', value: 'alamatODP'},
            ],
            dataODPAdmin : [
                {
                    nikODP : '123809154',
                    namaODP : 'Not Adam Sifher',
                    lahirODP : '01-01-1980',
                    asalODP : 'Malaysia',
                    datangODP : '05-06-2020',
                    provinsiODP : 'Jawa Barat',
                    kecamatanODP : 'Batununggal',
                    kotaODP : 'Bandung',
                    alamatODP : 'Jalan Kebon Kangkung No. 1',
                },
            ],
            searchPDPAdmin: '',
            headersPDPAdmin: [
                {
                    text: 'NIK/ NIC',
                    align: 'start',
                    sortable: false,
                    value: 'nikPDP',
                },
                { text: 'Nama', value: 'namaPDP'},
                { text: 'TglLahir', value: 'lahirPDP'},
                { text: 'Negara Asal', value: 'asalPDP'},
                { text: 'TglDatang', value: 'datangPDP'},
                { text: 'Provinsi', value: 'provinsiPDP'},
                { text: 'Kecamatan', value: 'kecamatanPDP'},
                { text: 'Kota', value: 'kotaPDP'},
                { text: 'Alamat', value: 'alamatPDP'},
            ],
            dataPDPAdmin : [
                {
                    nikPDP : '123809154',
                    namaPDP : 'Not Adam Sifher',
                    lahirPDP : '01-01-1980',
                    asalPDP : 'Malaysia',
                    datangPDP : '05-06-2020',
                    provinsiPDP : 'Jawa Barat',
                    kecamatanPDP : 'Batununggal',
                    kotaPDP : 'Bandung',
                    alamatPDP : 'Jalan Kebon Kangkung No. 1',
                },
            ],
            searchPosAdmin: '',
            headersPosAdmin: [
                {
                    text: 'NIK/ NIC',
                    align: 'start',
                    sortable: false,
                    value: 'nikPos',
                },
                { text: 'Nama', value: 'namaPos'},
                { text: 'TglLahir', value: 'lahirPos'},
                { text: 'Negara Asal', value: 'asalPos'},
                { text: 'TglDatang', value: 'datangPos'},
                { text: 'Provinsi', value: 'provinsiPos'},
                { text: 'Kecamatan', value: 'kecamatanPos'},
                { text: 'Kota', value: 'kotaPos'},
                { text: 'Alamat', value: 'alamatPos'},
            ],
            dataPosAdmin : [
                {
                    nikPos : '123809154',
                    namaPos : 'Not Adam Sifher',
                    lahirPos : '01-01-1980',
                    asalPos : 'Malaysia',
                    datangPos : '05-06-2020',
                    provinsiPos : 'Jawa Barat',
                    kecamatanPos : 'Batununggal',
                    kotaPos : 'Bandung',
                    alamatPos : 'Jalan Kebon Kangkung No. 1',
                },
            ],
            searchNegAdmin: '',
            headersNegAdmin: [
                {
                    text: 'NIK/ NIC',
                    align: 'start',
                    sortable: false,
                    value: 'nikNeg',
                },
                { text: 'Nama', value: 'namaNeg'},
                { text: 'TglLahir', value: 'lahirNeg'},
                { text: 'Negara Asal', value: 'asalNeg'},
                { text: 'TglDatang', value: 'datangNeg'},
                { text: 'Provinsi', value: 'provinsiNeg'},
                { text: 'Kecamatan', value: 'kecamatanNeg'},
                { text: 'Kota', value: 'kotaNeg'},
                { text: 'Alamat', value: 'alamatNeg'},
            ],
            dataNegAdmin : [
                {
                    nikNeg : '123809154',
                    namaNeg : 'Not Adam Sifher',
                    lahirNeg : '01-01-1980',
                    asalNeg : 'Malaysia',
                    datangNeg : '05-06-2020',
                    provinsiNeg : 'Jawa Barat',
                    kecamatanNeg : 'Batununggal',
                    kotaNeg : 'Bandung',
                    alamatNeg : 'Jalan Kebon Kangkung No. 1',
                },
            ],
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
        NavbarAdmin,
    }
}
</script>

<style scoped>

</style>



