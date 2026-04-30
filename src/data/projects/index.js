// Project Registry
// Untuk menambah project baru:
// 1. Buat file baru di folder ini, misal: my-new-project.js (export default { ... })
// 2. Import di sini, lalu tambahkan ke object `projects` dengan key sebagai slug URL
//    (slug dipakai di route /projects/:id)

import smartandon from './smartandon'
import robotInspection from './robot-inspection'
import buildercv from './buildercv'
import stockPrediction from './stock-prediction'
import cyclisticBikeShare from './cyclistic-bike-share'

export const projects = {
  'smartandon': smartandon,
  'robot-inspection': robotInspection,
  'buildercv': buildercv,
  'stock-prediction': stockPrediction,
  'cyclistic-bike-share': cyclisticBikeShare
}

export default projects
