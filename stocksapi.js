const xlsxFile = require('read-excel-file/node');
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/stock', (req, res) => {
    xlsxFile('./historic.xlsx', { sheet: 'all' }).then((rows) => {
        res.send(rows.filter((el, index) => index > 510 && index < 520));
    })
})

app.get('/headers', (req, res) => {
    xlsxFile('./historic.xlsx', { sheet: 'all' }).then((rows) => {
        res.send(rows.filter((el, index) => index == 0)[0]);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('public'))


// xlsxFile('./historic.xlsx', { getSheets: true }).then((rows) => {
//     console.table(rows);
// })

// │ (index) │   0    │         1          │        2         │       3        │        4         │        5         │      6      │
// ├─────────┼────────┼────────────────────┼──────────────────┼────────────────┼──────────────────┼──────────────────┼─────────────┤
// │    0    │ 'data' │ 'silver per ounce' │ 'copper per ton' │ 'iron per ton' │ 'WTI per barrel' │ 'gold per ounce' │ 'dow jones'

// xlsxFile('./historic.xlsx', { sheet: 'all' }).then((rows) => {
//     //console.table(rows.filter((el, index) => index == 0));
//     console.table(rows.filter((el, index) => index > 510 && index < 520));
//     //console.table(rows)
// })