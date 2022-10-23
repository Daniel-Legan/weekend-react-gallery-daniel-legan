const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params); // { id: '#' }
//     const galleryId = req.params.id;
//     for (const galleryItem of galleryItems) {
//         if (galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET Route
router.get('/', (req, res) => {
    console.log('in GET router');

    const sqlText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;

    pool.query(sqlText)
        .then((result) => {
            // console.log(result.rows);

            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting gallery', error);

            res.sendStatus(500);
        })
}); // End GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in PUT with id', req.params.id);
    console.log(req.params); // { id: '#' }
    const galleryId = req.params.id;


    const sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;

    pool.query(sqlText, [galleryId])
        .then((databaseResult) => {
            // okay
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error updating gallery item', error);
            res.sendStatus(500);
        });
}); // End PUT Route

// POST Route
router.post('/', (req, res) => {

    const item = req.body;

    const sqlText = `INSERT INTO "gallery" ("path", "description")
                        VALUES ($1, $2);`;

    pool.query(sqlText, [item.path, item.description])
        .then((databaseResult) => {
            console.log('added item to the database', item);

            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error posting item to the database', error);

            res.sendStatus(500);
        })
}); // End POST Route

module.exports = router;