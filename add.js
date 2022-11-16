function sendPost(){
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        color: document.getElementById("color").value,
        size:document.getElementById("size").value,
        price:document.getElementById("price").value,
        shippingtime:document.getElementById("shippingtime").value



      });
      
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);
    }