const express = require('express')
const mysql2 = require('mysql2')

const hostname = 'localhost'
const port = 3060

const db = mysql2.createConnection({
    host: "localhost",
    user: "root", 
    password: "", 
    database: "db_test"
})
db.connect(err=> {
    if(err) console.log(err)
    else console.log("DB Running")
})


const app = express()


app.get('/', (req, res) => {
    const sql = `SELECT * FROM users`

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.get('/:id', (req, res) => {
    const sql = `SELECT * FROM users WHERE id_user = ${req.params.id}`

    db.query(sql, (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

// // Create data Inventory /inventory
// router.post('/', (req, res) => {
//     const { nama_barang, gambar, deskripsi, kategori, status } = req.body
//     const sql = `INSERT INTO inventory (nama_barang, gambar, deskripsi, kategori, status) VALUES ('${nama_barang}', '${gambar}', '${deskripsi}', '${kategori}', '${status}')`

//     db.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Database Add inventory error", details: err.message });
//         }
//         response(200, result, "Data sukses ditambahkan", res)
//     })
// })


// // Update data Inventory /inventory
// router.put('/', (req, res) => {
//     const { id_inventory, nama_barang, gambar, deskripsi, kategori, status } = req.body

//     // mengecek id_inventory tidak boleh kosong
//     if (!id_inventory) {
//         return res.status(400).json({ error: "id_inventory is required" });
//     }

//     const sql = ` UPDATE inventory SET nama_barang = '${nama_barang}', gambar = '${gambar}', deskripsi = '${deskripsi}', kategori = '${kategori}', status = '${status}' WHERE id_inventory = ${id_inventory}`

//     db.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Database Add inventory error", details: err.message });
//         }
//         response(200, result, "Data sukses diubah", res)
//     })
// })


// // Delete data Inventory /inventory
// router.delete('/', (req, res) => {
//     const { id_inventory } = req.body
//     const sql = `DELETE FROM inventory WHERE id_inventory = ${id_inventory}`

//     db.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Database Add inventory error", details: err.message });
//         }
//         response(200, result, "Deleted data Success", res)
//     })
// })





app.listen(port, () => {
    console.log(`server berjalan ${hostname}:${port}`)
})