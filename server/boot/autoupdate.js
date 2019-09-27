

module.exports = function(app) {
    var mysqlDs = app.dataSources.mysqlDs;
    const estudiantes = app.models.estudiantes;
    const carrera = app.models.carrera;
    

    
       mysqlDs.autoupdate('estudiantes', function(err) {
        if (err) throw err;
        console.log('\nAutoupdated table `estudiantes`.');
    
       });

       mysqlDs.autoupdate('carrera', function(err) {
        if (err) throw err;
        console.log('\nAutoupdated table `carrera`.');
    
       });


  }

