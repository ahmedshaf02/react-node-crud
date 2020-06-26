const express = require("express");
const router = express.Router();
const mongo = require("mongoose");
const Employee = mongo.model("Employee");

router.get("/", (req, res) => {
  res.json("sample text");
});

router.post("/addemployee", (req, res) => {
  console.log(req.body);
  const { name, email, mobile, city } = req.body;
  Employee.findOne({ name: name })
    .then(emplyeeAvail => {
      if (emplyeeAvail) {
        return res.status(422).json({ error: "employee with same name" });
      }

      const employee = new Employee({
        name,
        email,
        mobile,
        city
      });

      employee
        .save()
        .then(data => res.json(data))
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => console.log(err));
});

router.get("/allemployee", (req, res) => {
  Employee.find()
    .then(employee => {
      if (!employee) {
        res.status(404).json({ error: "list is empty" });
      }
      res.json({ employee });
    })
    .catch(err => console.log(err));
});

router.put("/update/:id", (req, res) => {
  const { name, email, mobile, city } = req.body;
  Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: name,
        email: email,
        mobile: mobile,
        city: city
      }
    },
    { new: true }
  )
    .then(employee => {
      if (!employee) {
        res.status(404).json({ error: "employee not found" });
      }
      res.json({ employee });
    })
    .catch(err => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(employee => {
      if (!employee) {
        res.status(404).json({ error: "employee not found" });
      }
      res.json({ employee });
    })
    .catch(err => console.log(err));
});

module.exports = router;
