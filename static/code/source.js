var db = openDatabase("skills", "1.0", "Skills Database", 2*1024*1024);

db.transaction( function(tx){
    tx.executeSql("CREATE TABLE IF NOT EXISTS data (id  INTEGER PRIMARY KEY, route TEXT, name TEXT)");
});

