const Exonum = require('exonum-client')
const proto = require('./progress.js')

//const keyPair = Exonum.keyPair()
const keyPair = {
    publicKey: 'b07542f90eb8f15db6a0cd4f54aa602be77dac31a913061b73a1f0ed62031cbf',
    secretKey: 'e755bf1b9ff29946341e45ebf888b8e20d295498b70a0127ebe472cde15c668bb07542f90eb8f15db6a0cd4f54aa602be77dac31a913061b73a1f0ed62031cbf'
  }

transactionEndpoint = "http://127.0.0.1:8080/api/explorer/v1/transactions"

const Put = Exonum.newTransaction({
   author: keyPair.publicKey,
   service_id: 10,
   message_id: 0,
   schema: proto.Put
})

const id = 281474976765958
const semestr = 3
const year = 2019
const control_type_id = 6
//const control_type = String("Зачет")
const subject_id = 111111
//const subject = String("Физическая культура")
const date = 1576168423
const profile_id = 123123
const profile_uid = 169080
const mark_id = 669
const mark_nmb_retake = 1
const mark_date = 1576168333
const mark_value = 4
//const mark_value_str = String("Зачет")

const data = {
    id,
    semestr,
    year,
    control_type_id,
    //control_type,
    subject_id,
    //subject,
    date,
    profile_id,
    profile_uid,
    mark_id,
    mark_nmb_retake,
    mark_date,
    mark_value,
    //mark_value_str,
}

Put.send(transactionEndpoint, data, keyPair.secretKey).then(response => {
    console.log(response)
})

