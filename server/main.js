import { Meteor } from 'meteor/meteor';

Postagem = new Mongo.Collection("postagem");

Meteor.startup(() => {

    if(Postagem.find().count() == 0){

        Postagem.insert(
            {
                imgSrc:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Iron_Maiden_-_bass_and_guitars_30nov2006.jpg',
                descricao:'The winter is comming, menos em Patos',
                criadoEm:,
            }
        );

        Postagem.insert(
            {
                imgSrc:'http://static2.businessinsider.com/image/56d991d5dd08953d0d8b4806-2000-1125/night%20king%20white%20walker%20hardhome%20game%20of%20thrones%20hbo.jpeg.jpg',
                descricao:'The winter is comming, menos em Patos',
                criadoEm:,
            }
        );

        Postagem.insert(
            {
                imgSrc:'http://images1.mtv.com/uri/mgid:file:docroot:vh1.com:/sitewide/flipbooks/img/news/10_hottest_albums_september_08/05_81091189.jpg?enlarge=false&matte=true&matteColor=black&quality=0.85',
                descricao:'The winter is comming, menos em Patos',
                criadoEm:,
            }
        );

        Postagem.insert(
            {
                imgSrc:'http://artandroll.net/wp-content/uploads/2016/07/sepultura-2013.jpg',
                descricao:'The winter is comming, menos em Patos',
                criadoEm:,
            }
        );

    }

});
