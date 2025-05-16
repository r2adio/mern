import express from "express";

const app = express();
const port = 3000;

// in-memory database
const users = [{ name: "john", kidneys: [{ healthy: false }] }];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  // console.log(johnKidneys);
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({ noOfKidneys, noOfHealthyKidneys, noOfUnhealthyKidneys });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({ msg: "done!" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

//removing all the unhealthy kidneys
app.delete("/", (req, res) => {
  // only if atleast one unhealthy kidney is there do this, else return 411
  if (isThereAtleastOneUnhealthyidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({ healthy: true });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done!" });
  } else {
    res.sendStatus(411).json({ msg: "You've no bad kidneys" });
  }
});

function isThereAtleastOneUnhealthyidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(port, () => {
  console.log(`Server is running at port: ${port} ...`);
});
