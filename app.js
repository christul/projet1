  const   express = require('express')
  const   app = express()
  const port = 3000

  app.get('/', (req,res) => (res.send('Hello D-Click Toliara ')))
  app.listen(port,() => console.log('notre application est démarrée en http://localhost:' + port))
  
  app.get('/api/produits/1',(req,res) => res.send('l information sur le produit n°1'))

  app.get( '/api/produits/:id',(req,res) => {
    const id = req.params.id
    res.send('Information sur le produit n°' + id )
})
            
// affichage de la base de données Produit dans le PointdeTerminaison
app.get( "/api/produits/:id", (req,res) => {
  const id = parseInt(req.params.id)
  const produit = produits.find(produit => produit.id === id)
  res.send('les produit n° '+id+ ' demandé est :'+ produit.nom)
    }
  ) 
 
 // EndPoint pour afficher le nombre d’enregistrement dans la base de données.
 
 app.get('/api/produits/', (req,res) =>  {
     res.send( 'Il y a'+ produits.length + 'dans la base de données')
   }
 )
 
 // app.use(express.static('./'))
 app.get('/jarvis', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//app.use(express.static('./'))
app.get('/d-click', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}
)

app.get('/d-click/accueil', (req, res) => {
  res.sendFile(__dirname + '/accueil.html')
}
)

app.get('/d-click/inscrire', (req, res) => {
  res.sendFile(__dirname + '/inscrire.html')
}
)