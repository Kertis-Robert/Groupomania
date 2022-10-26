const Post = require('../models/Post');

const fs = require('fs');




//handler pour ajouter des Posts à la BDD//
exports.createPost = (req, res, next) => {
    console.log(req.body);
    const postObj  = req.body;
    delete postObj._id
    const post = new Post ({
      userId: req.body.userId,
      name: req.body.name,
      comments: req.body.comments,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
});
post.save()
.then(() => res.status(200).json({message: 'Objet enregistré !'}))
.catch(error => res.status(400).json({ error }));
};
//handler pour modifier un Post //
exports.modifyPost = (req, res, next) =>{
  console.log(req.body)
        const postObj = req.body.imageUrl?
        {
            ...req.body,
            //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            updated_at: Date.now()
          } : {
            ...req.body,    
           imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            updated_at: Date.now()
          }
        Post.findOne({_id: req.params.id})
        .then (function(post){
          if( postObj.imageUrl !== post.imageUrl){
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, (err)=>{if(err){throw err}})};
          console.log(post.imageUrl, postObj.imageUrl)} )
          .catch( error => res.status(400).json({error}));
        Post.updateOne({_id: req.params.id}, { ...postObj, _id: req.params.id })       
        .then(() => res.status(200).json({ message: 'objet modifie'}))
        .catch( error => res.status(400).json({error}));
};
//handler pour demander un post //
exports.getOnePost = (req, res, next) => {
  Post.findOne({_id: req.params.id })
  .then(post => res.status(200).json(post))
  .catch(error => res.status(404).json({error}));
 };


  //handler pour afficher toutes les Posts//

exports.getAllPosts = (req, res, next) => {
    Post.find().sort({updated_at: -1})
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}));
   };
  //handler pour supprimer un Post et l'image du fichier image //
 exports.deletePosts = (req, res, next) =>{
    Post.findOne({_id: req.params.id})
    .then( post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: 'objet supprime'}))
    .catch( error => res.status(400).json({error}));
      })
    })
    .catch(error => res.status(500).json({error}));
   
  };
  //handler de le like
exports.likePosts =(req, res, next) => {
   
   if(req.body.like === 1){
    Post.findOne({_id: req.params.id})            
    .then(post=> {
      if(!post.usersLiked.includes(req.body.userId)){
        Post.updateOne({_id: req.params.id}, {  $inc:{ likes: 1},
          $push:{usersLiked: req.body.userId}})
          .then(() => res.status(200).json(201))
          .catch(error => res.status(500).json({error}));
        }})}
    
  
     if(req.body.like === 0){
        Post.findOne({_id: req.params.id})            
          .then(post=> {
            if(post.usersLiked.includes(req.body.userId)){
              Post.updateOne({_id: req.params.id}, {  $inc:{ likes: -1},
                $pull:{usersLiked: req.body.userId}})
                .then(() => res.status(200).json(201))
                .catch(error => res.status(500).json({error}));
              }})
          .catch(error => res.status(500).json({error}));
        }}