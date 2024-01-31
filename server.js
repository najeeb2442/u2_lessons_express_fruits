const express = require("express")
const fruits = require("./fruits")
const PORT = process.env.PORT || 3000
const app = express()
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)

app.get("/ping", (req, res) => {
  res.json("pong")
})

app.get("/someroute", (req, res) => {
  // do something here if necessary before the response
  res.send(data)
  // send data back in response to the incoming request
})

app.get("/greet/:name", (req, res) => {
  // do something here if necessary before the response
  res.send(`Why hello there, ${req.params.name}!`)
  // send data back in response to the incoming request
})

app.get("/five", (req, res) => {
  const arr = [1, 2, 3, 4, 5]
  res.send(arr)
})

app.get("/evens/:n", (req, res) => {
  const arr = []
  if (parseInt(req.params.n)) {
    for (let i = 2; i <= parseInt(req.params.n); i++) {
      if (i % 2 == 0) {
        arr.push(i)
      }
    }
    res.send(arr)
  } else {
    res.send("not a number BRUH")
  }
})
app.get("/namelength/:name", (req, res) => {
  let name = req.params.name
  res.send("" + name.length)
})

app.get("/fruits/sort", (req, res) => {
  // implement sort
  fruits.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1
    }
  })
  res.send(fruits)
})

app.get("/fruits/:name", (req, res) => {
  const fruit = fruits.find((name) => {
    return req.params.name === name.name
  })
  res.send(fruit)
})

app.get("/fruits", (req, res) => {
  const allFruits = fruits
  res.send(allFruits)
})
