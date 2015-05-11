var DiscGolf = {
    username:"neo4j",
    password:"password1",
    init:function(){
        DiscGolf.query.getPlayersWithDogs();
        DiscGolf.query.getWinners();

       // DiscGolf.view.displayWinnerInfo();

    },
    auth:{
       makeBaseAuth: function(){
           var tok = DiscGolf.username + ':' + DiscGolf.password;
           var hash = btoa(tok);
           return "Basic " + hash;
       }
    },
    server:{
        doNeoPost:function(cypher, params, callBack){

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:7474/db/data/cypher",
                accepts: { json: "application/json" },
                dataType: "json",
                contentType:"application/json",
                headers: {
                    "Authorization": DiscGolf.auth.makeBaseAuth()
                },
                data: JSON.stringify({ "query" : cypher, "params":params}),
                success:function(data,xhr,status) {
                    callBack(data)
                }
            });

        }
    },
    query:{
        getPlayersWithDogs:function(){
            DiscGolf.server.doNeoPost("MATCH (n{name:'John Smith'}) set n.hasDog=true RETURN n", {},DiscGolf.view.displayPlayersWithDogs);
        },
        getWinners: function () {
            DiscGolf.server.doNeoPost("MATCH (winners)-[r:WON_AT]->() RETURN winners", {}, DiscGolf.view.displayWinners)
        }

    },
    view:{
        displayPlayersWithDogs: function (queryData) {

            $('body').append('<ul id="playersWithDogs"><h2>players with dogs:</h2> </ul>');
            $.each(queryData.data, function(){
              $('#playersWithDogs').append('<li>name: '+this[0].data.name+'<br>');
              $('#playersWithDogs').append('status: '+this[0].data.status+'<br>');
              $('#playersWithDogs').append('handicap: '+this[0].data.handicap+'</li>');
            })

        },
        displayWinners:function(queryData){
            $('body').append('<ul id="winners"><h2>winners:</h2> </ul>');
            debugger;
            $.each(queryData.data, function(){
                $('#winners').append('<li>name: '+this[0].data.name+'<br>');
                $('#winners').append('status: '+this[0].data.status+'<br>');
                $('#winners').append('handicap: '+this[0].data.handicap+'</li>');
            })
        }
    }

}