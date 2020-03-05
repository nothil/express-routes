describe('express for testing', () =>{

    const axios = require('axios');
    const readline = require("readline");
    const { pool} = require("pg");

     const endpoint = 'http://localhost:3000';

    beforeEach(() =>{
       server = require('../routes/app')
       var data = {};

       const pool = new pool();
       
    });

    // it('should return status 200', (done) =>{
    //     axios.post("https://localhost:3000/addNewVisitor")
    //     expect(response.statusCode).toBe(200);
    //     done();
    // });
    
    // it('should return JSON',  (done) => {
    //     axios.get('https://localhost:3000/addNewVisitor')
        
    //         var jsonData = axios.response.json();
    //         axios.expect(jsonData.value).to.eql(100);

        
    //     done();

    // });

    // it('do something',  ()=> {
    //     axios.post("https://localhost:3000/addNewVisitor", function () {
    //         var jsonData = axios.response.json();
    //         axios.expect(jsonData.value).to.eql(100);
    //     })
    

    // });

   

describe('city', function () {
    


});


});
