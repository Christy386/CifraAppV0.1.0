import axios from 'axios';
function get_axios_json(){
    axios({
        method: "get",
        url: "https://testonlynodereplit.christy386.repl.co/api",
        //responseType: "",
    }).then((response) => {
        
         response.data
        //console.log(data);
    });
}

export default axios