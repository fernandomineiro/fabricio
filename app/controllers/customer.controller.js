const csvtojson = require('csvtojson'); 
const mysql = require("mysql"); 
var con = mysql.createConnection({
	host: "108.179.252.60",
	user: "karamb48_nodee",
	password: "karamb48_nodee",
	database: "karamb48_nodee"
  });




exports.verifica = function(req, res) {
	const fileName = "contact-number (7).csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
	let zz = '553598919045';
	let number = 0;
	for (var i = 0; i < source.length; i++) { 
		let numero = source[i][zz];
		

		con.connect(function() {
		//	if (err) throw err;
			con.query(`SELECT * FROM a WHERE telefone = ${numero}`, function (err, result, fields) {
			 // if (err) throw err;
			  //console.log(result);
			  if(result.length === 0){
				var sql = `INSERT INTO a (nome, telefone) VALUES ('Pessoa', ${numero})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 inserido com sucesso, ID: " + result.insertId);
  });

			  }else{
				  number = number + 1;
				console.log("Já tem no banco"+number);
			  }
			 



			});
		  });
	}

	res.status(200).send("Programa rodando...");
		
	});
};

