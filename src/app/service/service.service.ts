import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    Base_Url: any ="http://192.168.2.116:8181";
   //live_Url: any= "https://vanguard-api.herokuapp.com";
  //live_Url:any= "https://smartcover-api.herokuapp.com/smartCover/api"
  live_Url:any = "http://192.168.2.116:8080/smartCover/api"
   notifyBucket: any = "/topics/com.ecl.smartcoveragent";
   notifyUrl: any = 'https://fcm.googleapis.com/fcm/send';


  




  isLoggedInStatus:any;


   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private smshttpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   //.set('Access-Control-Allow-Origin', '*')
   .set('Authorization', 'key=AIzaSyBlTd4JoSMbrs8W5eeRESJ5_TMFIHrgnBw')

   //.set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   //.set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private options = {
    headers: this.httpHeaders
   };

   private smsoptions = {
    headers: this.smshttpHeaders
   };



  constructor( private http: HttpClient) {

    /*var connectionMessage = "internet connection available";
var noConnectionMessage = "No internet connection.";
window.onload = checkInternetConnection;
function checkInternetConnection() {
  var isOnLine = navigator.onLine;
   if (isOnLine) {

    swal.fire("Internet Sucess",connectionMessage, "success");

   } else {
    swal.fire({ type: 'error',
    title: 'Oops...',
    text: noConnectionMessage,
    footer: '<a href>Can you please check your internet?</a>'});
   }
}*/
  
    
   }

   get isLoggedIn(){
    this.isLoggedInStatus = localStorage.isLoggedInStatus
    if(!this.isLoggedInStatus){
      return false
    } else {
      return true
    }
  }




  getLogin(test){
    return this.http.post(this.live_Url+'/manager_login', test, this.options);
  }

  quoteprove(invoice, status){
    invoice.status = status;
    return this.http.post(this.live_Url+'/managers/approve_quote',JSON.stringify({invoice_no:invoice.invoice_no,status:invoice.status}), this.options)
  }

  getquote(email, role){
    return this.http.post(this.live_Url+'/managers/get_quotes',JSON.stringify({email: email, role: role}), this.options);
   }

   getAgents(email, role){
    return this.http.post(this.live_Url+'/managers/get_agents',JSON.stringify({email: email, role:role}), this.options);//agents
   }


   getCustomers(email, role){
    return this.http.post(this.live_Url+'/managers/get_clients',JSON.stringify({email: email, role:role}), this.options);//customers
   }

   getTransaction(email,role){
    return this.http.post(this.live_Url+'/managers/get_transactions',JSON.stringify({email: email, role:role}), this.options);//Transactions
   }

   getAnaytics(email, role){
    return this.http.post(this.live_Url+'/managers/get_transactions_analytics',JSON.stringify({email:email, role:role}), this.options);//analytics
  }

  addagent(agent){
   return this.http.post(this.live_Url+'/manager_create_agent',JSON.stringify(agent), this.options);//analytics
  }

  getNewclient(email){
    return this.http.post(this.live_Url+'/managers/get_newClients',JSON.stringify({email:email}), this.options);//New clients module
  }






  /* getweeklyAnaytics(email){
      return this.http.post(this.live_Url+'/vanguard/api/managers/get_transactions_Period', JSON.stringify({email:email }), this.options);
  }*/

  getweeklyAnaytics(email, role){
    return this.http.post(this.live_Url+'/managers/get_transactions_Agents_weekly', JSON.stringify({email:email, role: role }), this.options);
  }





 /* gettransactionPeriod(data){
    return this.http.post(' https://9949c24d.ngrok.io/vanguard/api/managers/get_transactions_Period_Details', JSON.stringify(data), this.options);
  }*/
  



  gettransactionPeriod(data){
    return this.http.post(this.live_Url+'/managers/get_transactions_Period', JSON.stringify(data), this.options);

  }

  getStickers(email){
return this.http.post(this.live_Url+'/managers/get_stickers', JSON.stringify({email:email}), this.options);
  }

  

  addStickers(data:any){
    return this.http.post(this.live_Url+'/managers/add_stickers',JSON.stringify(data), this.options)
  }

  gettransactionDetails(data){
    return this.http.post(this.live_Url+'/managers/get_transactions_Period_Details',data, this.options)
  }

  

  addManager (email){
    return this.http.post(this.live_Url+'/managers/add',JSON.stringify({email:email}), this.options)

  }


  getTopPerformingAgent(data:any){
    return this.http.post(this.live_Url+ '/managers/get_topPerformingAgents',data, this.options)
  }

  sendNotification(data:any){
    return this.http.post(this.notifyUrl,data,this.smsoptions)
  }

  getManagers(email:any, role){
    return this.http.post(this.live_Url+'/get_managers',JSON.stringify({email:email, role:role}), this.options)
  }


  getNoStickers(email, role){
return this.http.post(this.live_Url+'/managers/get_sticker_count',JSON.stringify({email:email, role:role}), this.options)
  }
/*---------------------- Customer section from main adminstrator level---------------------------*/


  /*gethrlogin(hftest){
    return this.http.post(this.live_Url+'',hftest, this.options);
  }*/
getStickersalesgraph(data){
return this.http.post(this.live_Url+'/managers/get_stickerOverPeriod',data, this.options)
}


sendSmstoDb(email, role){
  return this.http.post(this.live_Url+'/managers/add_notification',({email:email, role:role}), this.options)
}

policiesGraphapi(data){
  return this.http.post(this.live_Url+'/managers/get_PolicyOverPeriod', data, this.options)
}

Cashsegregate(email, role){
 return this.http.post(this.live_Url+'/managers/get_transactions_total_type',({email:email, role:role}), this.options);
}

}






