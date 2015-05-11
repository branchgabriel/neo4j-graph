var DiscGolf = {
    init:function(){
        DiscGolf.playersWithDogs=DiscGolf.query.getPlayersWithDogs();
        console.log(DiscGolf.playersWithDogs)
    },
    query:{
        getPlayersWithDogs:function(){
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:7474/db/data/cypher",
                accepts: { json: "application/json" },
                dataType: "json",
                contentType:"application/json",
                data: JSON.stringify({ "query" : "MATCH (n{name:'John Smith'}) set n.hasDog=true RETURN n", "params":{}}),
                success:function(data,xhr,status) {
                    return data;
                }
            });
        }

    }

}