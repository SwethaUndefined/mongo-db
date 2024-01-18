module.exports = function timeStamp(schemaUser1){
    schemaUser1.pre ('save',function (next){ 
            let now = Date.now(); 
            this.createdAt = now;
        
            next();
        });
}


//Now import this to schema.js, instead of doing there, ill comment it and import it from here.