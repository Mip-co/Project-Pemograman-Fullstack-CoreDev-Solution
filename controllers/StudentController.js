class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua data",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        res.send("Menambahkan data Students");
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengubah data Students ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send(`Menghapus data Students ${id}`);
    }
}

const object = new StudentController();

module.exports = object;