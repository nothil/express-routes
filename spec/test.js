describe('express for testing', () =>{

    const axios = require('axios');
    const readline = require("readline");
    const { Pool } = require("pg");

     const endpoint = 'http://localhost:3000';

    beforeEach(() =>{
       server = require('../routes/app')
       var Jsondata = {};

       const pool = new Pool();
       
    });

    afterEach(() =>{
        server.close()
    })

    it('add visitor to the db', async (done) =>{
       try{
        const response = await axios.post("http://localhost:3000/addNewVisitor");
        expect(response.statusCode).toBe(200);

       } catch (err) {
            console.log(err)
       }
        done()
    });


    it('delete visitor from the db', async (done) =>{
        try{
        const response = await axios.delete("http://localhost:3000/deleteVisitor");
         expect(response.statusCode).toBe(200);
 
        } catch (err) {
             console.log(err)
        }
         done()
 
 
     });

    
    it('displays all visitors', async (done) =>{
        try{
         const response = await axios.get("http://localhost:3000/viewAllVisitors");
         expect(response.statusCode).toBe(200);
 
        } catch (err) {
             console.log(err)
        }
         done()
 
 
     });



   
});
