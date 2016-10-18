import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Postagens = new Mongo.Collection("postagens");

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

    Meteor.subscribe("usres");
    Meteor.subscribe("postagens");

    Template.body.helpers({
        isLoggedIn(){
            if(Meteor.userId()){
                return true;
            }

            return false;
        }
    });



    Template.quadroDePostagens.helpers({
        postagens(){
            return Postagens.find();
        },
        nome_autor(criadoPor){
            var user = Meteor.users.findOne({_id:criadoPor},{username:1});

            if(user){
                return user.username;
            }else{
                return "Anônimo";
            }

        },
        isAutor(criadoPor){

            console.log(criadoPor == Meteor.userId());
            return criadoPor == Meteor.userId();
        }
    });

    Template.quadroDePostagens.events({
        'click #js-remove-postage'(){
            var imgId = this._id;

            Postagens.remove({_id:imgId});
        }
    });


    Template.formularioInserirPostagem.events({
        "submit .js-formulario-inserir-postagem"(event, instance){
            var imgSrc = event.target.img_src.value;
            var descricao = event.target.descricao.value;


            Postagens.insert({
                'imgSrc':imgSrc,
                'descricao': descricao,
                'criadoEm': new Date(),
                'criadoPor': Meteor.userId()
            });

            event.target.img_src.value = '';
            event.target.descricao.value = '';

            return false;
        }
    });







    /*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/

//console.log("Estou no CLIENT, pasta CLIENT main.js");

/* TESTE DO CLIET SERVER
if(Meteor.isServer){
    console.log("Estou no SERVER, pasta SERVER main.js");
}
*/
