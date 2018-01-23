let socket = io();
socket.on(`connect`,()=>{
    console.log(`connected`);
   socket.on
    socket.emit(`gg2`,{data:"gg2data"});

});
socket.on(`disconnect`,()=>{
    console.log(`disconnected`);
});
socket.on(`gg`,function(ggdata){
    alert(`gg`);
    console.log(ggdata);
});
socket.on(`ggwp`,(data)=>{
    console.log(data);
});


