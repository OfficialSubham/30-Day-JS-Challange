//Task 3

usingFinally() 

function usingFinally() {
    try{
        throw Error("mai hoon error")
    }
    catch(error) {
        console.log(error);
    }
    finally{
        console.log("mai hoon finally or mai aagaya");
    }
}